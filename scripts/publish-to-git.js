/* Copyright (c) 2015-present, salesforce.com, inc. All rights reserved */
/* Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license */

/* eslint-disable no-console, global-require */

console.log('# Publishing to git');

import async from 'async';
import fs from 'fs';
import path from 'path';
import minimist from 'minimist';
import { version } from '../package.json';

const argv = minimist(process.argv.slice(2));
const rootPath = path.resolve(__dirname, '../');
const getTmpPath = (type) => path.resolve.bind(path, path.resolve(rootPath, `.tmp-${type}`));
const gitDir = '.git';

const exec = ([command, dir = '.'], callback) => {
	const child = require('child_process').exec(command, {
		cwd: path.resolve(rootPath, dir)
	}, (err) => {
		callback(err);
	});

	child.stdout.on('data', (data) => process.stdout.write(data.toString()));
};

// /////////////////////////////////////////////////////////////
// Tasks
// /////////////////////////////////////////////////////////////

const cleanPackageJson = (done, type) => {
	const tmpPath = getTmpPath(type);

	const packageJSON = JSON.parse(fs.readFileSync(tmpPath('package.json')).toString());

	if (type === 'es') {
		packageJSON['jsnext:main'] = packageJSON.main;
	}

	fs.writeFile(
		tmpPath('package.json'),
		JSON.stringify(packageJSON, null, 2),
		done
	);
};

const publish = (done, type) => {
	const tmpPath = getTmpPath(type);
	const tmpDir = tmpPath();
	const remote = argv.remote || 'origin';

	let typeSuffix = '';
	if (type !== 'commonjs') {
		typeSuffix = `-${type}`;
	}

	let actions = [
		['git init', tmpDir],
		[`cp ${gitDir}/config ${tmpDir}/.git`],
		['git add -A', tmpDir]
	];

	if (argv.tag) {
		actions = [
			...actions,
			[`git commit -m "Release commit for ${argv.tag}-${type} [ci skip]"`, tmpDir],
			[`git tag ${argv.tag}${typeSuffix}`, tmpDir, true],
			[`git push ${remote} -f --tags ${argv.tag}${typeSuffix}`, tmpDir]
		];
	} else {
		actions = [
			...actions,
			[`git commit -m "Release commit for ${version}-${type} [ci skip]"`, tmpDir],
			[`git tag v${version}${typeSuffix}`, tmpDir],
			[`git push ${remote} --tags v${version}${typeSuffix}`, tmpDir]
		];
	}

	actions = [
		...actions,
		[`rm -r ${tmpDir}`]
	];

	async.eachSeries(actions, exec, (err) => {
		if (err) throw err;

		console.log(`## Successfully published ${type} to git`);

		done();
	});
};

async.series([
	(done) => exec(['npm run dist'], done),

	(done) => cleanPackageJson(done, 'es'),
	(done) => publish(done, 'es'),

	(done) => cleanPackageJson(done, 'commonjs'),
	(done) => publish(done, 'commonjs'),

	(done) => cleanPackageJson(done, 'amd'),
	(done) => publish(done, 'amd')
], (err) => {
	if (err) throw err;
});