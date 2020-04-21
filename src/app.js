import React from 'react';
import Home from './home';
import ArticleApp from './article';
import BlogHeader from './header';
import { Route } from 'react-router-dom';

const App = () => {
    return (
        <>
            <BlogHeader />
            <Route path="/" exact component={Home} />
            <Route path="/article" component={ArticleApp} />
        </>

    );
}

export default App;