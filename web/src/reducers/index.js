import { combineReducers } from 'redux';

import repositories from './repositories';
import loading from './loading';

export default combineReducers({
    repositories,
    loading
});