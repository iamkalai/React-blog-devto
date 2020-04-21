import React from 'react';
import Home from './home';
import ArticleApp from './article';
import BlogHeader from './header';
import PageNotFound from './pagenotfound';
import { Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <>
            <BlogHeader />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/article/:articleID" component={ArticleApp} />
                <Route component={PageNotFound} />
            </Switch>
        </>

    );
}

export default App;