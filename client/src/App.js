import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from './redux/store'

//components
import Header from './components/Header';
import PhoneList from './components/PhoneList';
import PhoneDetail from './components/PhoneDetail';

function App() {
    return (
        <Router>
            <Provider store={store}>
                <Header />

                <Switch>
                    
                    <Route exact path="/" component={PhoneList} />
                    <Route exact path="/phone/:id" component={PhoneDetail} />

                </Switch>
            </Provider>
        </Router>
    );
}

export default App;
