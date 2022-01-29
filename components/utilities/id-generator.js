import nanoid from 'nanoid';

export const generateId = nanoid;
export const generateShortId = () => nanoid(9);
