define(['module', 'react', 'classnames', 'lodash.omit', './info', './title', './detail-row', './detail-block', './base', './record-home', './object-home', '../icon', '../bread-crumb', '../../utilities/constants'], function (module, _react, _classnames, _lodash, _info, _title, _detailRow, _detailBlock, _base, _recordHome, _objectHome, _icon, _breadCrumb, _constants) {
	'use strict';

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _info2 = _interopRequireDefault(_info);

	var _title2 = _interopRequireDefault(_title);

	var _detailRow2 = _interopRequireDefault(_detailRow);

	var _detailBlock2 = _interopRequireDefault(_detailBlock);

	var _base2 = _interopRequireDefault(_base);

	var _recordHome2 = _interopRequireDefault(_recordHome);

	var _objectHome2 = _interopRequireDefault(_objectHome);

	var _icon2 = _interopRequireDefault(_icon);

	var _breadCrumb2 = _interopRequireDefault(_breadCrumb);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	var _extends = Object.assign || function (target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];

			for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}

		return target;
	};

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
		return typeof obj;
	} : function (obj) {
		return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var displayName = _constants.PAGE_HEADER;
	var propTypes = {
		/**
   * Optional class name
   */
		className: _react2.default.PropTypes.string,
		/**
   * The type of component
   */
		variant: _react2.default.PropTypes.string,
		/**
   * The info property can be a string or a React element
   */
		label: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element]),
		/**
   * The title property can be a string or a React element
   */
		title: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element]),
		/**
   * The info property can be a string or a React element
   */
		info: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element]),
		/**
   * The page header icon
   */
		icon: _react2.default.PropTypes.element,
		/**
   * Name of the icon. Visit <a href="http://www.lightningdesignsystem.com/resources/icons">Lightning Design System Icons</a> to reference icon names.
   */
		iconName: _react2.default.PropTypes.string,
		/**
   * The icons category
   */
		iconCategory: _react2.default.PropTypes.oneOf(['action', 'custom', 'doctype', 'standard', 'utility']),
		/**
   * If omitted, icon position is centered.
   */
		iconPosition: _react2.default.PropTypes.oneOf(['left', 'right']),
		iconSize: _react2.default.PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
		/**
   * For icon variants, please reference <a href='http://www.lightningdesignsystem.com/components/buttons/#icon'>Lightning Design System Icons</a>.
   */
		iconVariant: _react2.default.PropTypes.oneOf(['container', 'border', 'border-filled', 'small', 'more']),
		/**
   * Content to appear on the right hand side of the page header
   */
		contentRight: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element]),
		/**
   * An array of buttons which appear on the component's right hand side.
   */
		details: _react2.default.PropTypes.array,
		/**
   * Nav content which appears in the upper right hand corner.
   */
		navRight: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element]),
		/**
   * An array of react elements presumably anchor <a> elements.
   */
		trail: _react2.default.PropTypes.array
	};

	var defaultProps = {
		className: '',
		variant: 'base',
		navRight: '',
		contentRight: '',
		details: [],
		trail: []
	};

	/**
  * The PageHeader component adds PageHeader, PageHeader.Info, PageHeader.Title, PageHeader.DetailRow, and PageHeader.DetailBlock.
  */

	var PageHeader = function (_Component) {
		_inherits(PageHeader, _Component);

		function PageHeader() {
			_classCallCheck(this, PageHeader);

			return _possibleConstructorReturn(this, (PageHeader.__proto__ || Object.getPrototypeOf(PageHeader)).apply(this, arguments));
		}

		_createClass(PageHeader, [{
			key: 'render',
			value: function render() {
				var _props = this.props;
				var className = _props.className;
				var contentRight = _props.contentRight;
				var details = _props.details;
				var icon = _props.icon;
				var iconCategory = _props.iconCategory;
				var iconName = _props.iconName;
				var iconPosition = _props.iconPosition;
				var iconSize = _props.iconSize;
				var iconVariant = _props.iconVariant;
				var info = _props.info;
				var label = _props.label;
				var navRight = _props.navRight;
				var title = _props.title;
				var trail = _props.trail;
				var variant = _props.variant;


				var classes = this._getClassNames(className);

				/**
     * Initialize component variables
     */
				var labelElement = void 0;
				var iconElement = void 0;
				var titleElement = void 0;
				var infoElement = void 0;
				var contentRightElement = void 0;
				var navRightElement = void 0;
				var Variant = void 0;

				/**
     * Render the icon
     */
				var renderIcon = function renderIcon() {
					if (iconName) {
						return _react2.default.createElement(_icon2.default, {
							name: iconName,
							category: iconCategory,
							position: iconPosition,
							size: iconSize,
							variant: iconVariant
						});
					}
					return icon;
				};

				/**
     * Render the label
     */
				var renderLabel = function renderLabel() {
					var type = typeof label === 'undefined' ? 'undefined' : _typeof(label);

					if (trail.length > 0) {
						return _react2.default.createElement(
							'nav',
							{ className: 'slds-m-bottom--xx-small', role: 'navigation' },
							_react2.default.createElement(_breadCrumb2.default, { trail: trail })
						);
					} else {
						if (type === 'string') {
							return _react2.default.createElement(
								'p',
								{ className: 'slds-text-title--caps' },
								label
							);
						}
						return label;
					}
				};

				/**
     * Render the title
     */
				var renderTitle = function renderTitle() {
					var type = typeof title === 'undefined' ? 'undefined' : _typeof(title);

					if (type === 'string') {
						return _react2.default.createElement(_title2.default, { title: title });
					}
					return title;
				};

				/**
     * Render info
     */
				var renderInfo = function renderInfo() {
					var type = typeof info === 'undefined' ? 'undefined' : _typeof(info);

					if (type === 'string') {
						return _react2.default.createElement(
							_info2.default,
							null,
							info
						);
					}
					return info;
				};

				/**
     * Steal contentRight's children
     */
				var renderNavRight = function renderNavRight() {
					var type = typeof navRight === 'undefined' ? 'undefined' : _typeof(navRight);

					if (type !== 'string') {
						return _react2.default.createElement('div', _extends({
							className: 'slds-col slds-no-flex slds-grid slds-align-top'
						}, navRight.props));
					}
					return navRight;
				};

				/**
     * Steal contentRight's children
     */
				var renderContentRight = function renderContentRight() {
					var type = typeof contentRight === 'undefined' ? 'undefined' : _typeof(contentRight);

					if (type !== 'string') {
						return _react2.default.createElement('div', _extends({ className: 'slds-grid' }, contentRight.props));
					}
					return contentRight;
				};

				labelElement = renderLabel();
				iconElement = renderIcon();
				titleElement = renderTitle();
				infoElement = renderInfo();
				navRightElement = renderNavRight();
				contentRightElement = renderContentRight();

				switch (variant) {
					case 'objectHome':
						Variant = _objectHome2.default;
						break;
					case 'recordHome':
						Variant = _recordHome2.default;
						break;
					case 'relatedList':
						Variant = RelatedList;
						break;
					default:
						Variant = _base2.default;
				}

				return _react2.default.createElement(
					'div',
					{ className: classes, role: 'banner' },
					_react2.default.createElement(Variant, {
						label: labelElement,
						icon: iconElement,
						title: titleElement,
						info: infoElement,
						contentRight: contentRightElement,
						navRight: navRightElement,
						details: details
					})
				);
			}
		}, {
			key: '_getClassNames',
			value: function _getClassNames(className) {
				return (0, _classnames2.default)('slds-page-header', className);
			}
		}]);

		return PageHeader;
	}(_react.Component);

	PageHeader.displayName = displayName;
	PageHeader.propTypes = propTypes;
	PageHeader.defaultProps = defaultProps;

	module.exports = PageHeader;
	module.exports.Info = _info2.default;
	module.exports.Title = _title2.default;
	module.exports.DetailRow = _detailRow2.default;
	module.exports.DetailBlock = _detailBlock2.default;
});