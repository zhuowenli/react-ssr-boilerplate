import { path, pathOr, split, tryCatch, always, compose } from 'ramda';

// get :: string, (defaultValue) -> Object -> any
const get = (location, or) =>
    tryCatch(
        compose((or == null ? path : pathOr(or)), split('.')),
        always(null)
    )(location);

export default get;
