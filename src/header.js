import React from 'react';

const bloggerName = 'Kalaiarasan Pushpanathan';

const BlogHeader = () => {
    return (
        <header>
            <a href="./">Blog - <span className="name">{bloggerName}</span></a>
        </header>
    );
}


export default BlogHeader;