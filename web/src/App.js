import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas/root';
import reducers from './reducers';

import 'fontsource-roboto';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const theme = createMuiTheme({
    palette: {        
        primary: {
            main: "#24292E",
            contrast: "#fff"
        },

        secondary: {
            main: "#7cbae6"            
        }
    }
});

const App = () => {
    return (
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <Router>
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </MuiThemeProvider>
        </Provider>
    )
}

export default App;