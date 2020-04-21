import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Footer, Header } from './components';
import Routes from './routes';
import ScrollToTop from './ScrollToTop';

import './App.scss';

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
