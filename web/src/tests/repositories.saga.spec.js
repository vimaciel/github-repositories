import { expectSaga } from 'redux-saga-test-plan';
import * as sagas from '../sagas/repositories';
import { search, updateStore } from '../actions/repositories';
import { updateSearchStore } from '../actions/search';
import * as matchers from 'redux-saga-test-plan/matchers'
import * as api from '../helpers/api';3

const apiReturns = {
    success: true,
    data: {
        total: 1,
        items: [
            {
                name: 'react',
                full_name: 'facebook/react',
                url: 'https://github.com/facebook/react',
                description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
                forks: 29689,
                stars: 151990,
                owner: {
                    login: 'facebook',
                    avatar_url: 'https://avatars3.githubusercontent.com/u/69631?v=4',
                    page_url: 'https://github.com/facebook'
                }
            }
        ]
    }
}

const apiReturnsModel = {
    data: {
        ...apiReturns
    }
}

describe('Testing repositories sagas', () => {
    it('Testing searchRepositoriesWatcher saga', () => {
        const page = 1;
        const language = 'language';
        const query = '';

        return expectSaga(sagas.searchRepositoriesWatcher)
            .provide([
                [matchers.call.fn(api.get), apiReturnsModel]
            ])
            .put(updateSearchStore({ page, language, query }))
            .put(updateStore(apiReturns.data))
            .dispatch(search(page, language, query))
            .run()
    })
})