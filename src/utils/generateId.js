import nanoid from 'nanoid';

export default function generateId(prefix = '') {
    return `${prefix && `${prefix}-`}${nanoid()}`;
}
