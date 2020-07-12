import { combineReducers } from 'redux';

import repositories from './repositories';
import loading from './loading';
import search from './search';

export default combineReducers({
    repositories,
    loading,
    search
});