import { CHANGE_FILTER } from '../constants';

const BASE_FILTER = 'all';

const filter = (state = BASE_FILTER, { type, active }) => {
    switch (type) {
        case CHANGE_FILTER:
            return active;
        default:
            return state;
    }
}

export default filter;