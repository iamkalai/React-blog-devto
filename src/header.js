import React from 'react';
import { Link } from 'react-router-dom';

const bloggerName = 'Kalaiarasan Pushpanathan';

const BlogHeader = () => {
    return (
        <header>
            <Link to="/">Blog - <span className="name">{bloggerName}</span></Link>
        </header>
    );
}

export default BlogHeader;