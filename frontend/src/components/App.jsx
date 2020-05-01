import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Footer, Header } from './index';
import Routes from '../routes';
import ScrollToTop from './Common/ScrollToTop';

import '../assets/styles/index.scss';

function App() {
    return (
        <>
            <Router>
                <ScrollToTop>
                    <Header />
                    <Routes />
                    <Footer />
                </ScrollToTop>
            </Router>
        </>
    );
}

export default App;
