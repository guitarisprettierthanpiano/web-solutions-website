import * as React from 'react';
import { Route, HashRouter, Switch} from 'react-router-dom';

import Header from './components/header';
import Home from './components/home';
import AboutUs from './components/about-us';
import Footer from './components/footer';

const App: React.FC = () => {
    return(
        <HashRouter>
            <Header />

            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/aboutus' component={AboutUs}/>
            </Switch>
            <Footer />
        </HashRouter>
    );
};

export default App;