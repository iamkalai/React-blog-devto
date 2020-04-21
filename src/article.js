import React from 'react';
import './article.css';
import './devto.css';
import './style.css';
import './custom_font.css';

const bloggerName = 'Kalaiarasan Pushpanathan';

const speedup = () => {
    let speed = getComputedStyle(document.body).getPropertyValue('--user-img-speed');
    speed = parseFloat(speed.replace('s', '')) / 3 + 's'
    document.documentElement.style.setProperty('--user-img-speed', speed);
}

const ArticleTile = (props) => {
    const [article, setArticle] = React.useState({});

    const getDevArticle = async () => {
        const id = props.articleID;
        const response = await fetch(`https://dev.to/api/articles/${id}`);
        const data = await response.json();
        setArticle(data);
    }

    React.useEffect(() => {
        getDevArticle()
    }, [])

    return (
        <article>
            <img id="cover" alt="cover" src={(article.cover_image) ? article.cover_image : require('../src/assets/images/placeholder.jpg')} />
            <h1 id="title">{article.title}</h1>
            <ArticleAddress name={bloggerName} date={article.readable_publish_date} />
            <ArticleTags tags={article.tags} />
            <div id="article-body" dangerouslySetInnerHTML={{ __html: article.body_html }}></div>
        </article>
    );
}

const ArticleAddress = (props) => {
    return (
        <address>
            <img id="author-img" src={require("../src/assets/images/profile.jpg")} alt="Author" onClick={speedup} />
            <span id="author-name" className="name">{props.name}</span>
            <p id="date">{props.date}</p>
            <ul>
                <li>
                    <a id="twitter" target="_blank" rel="noopener noreferrer" href="https://twitter.com/iamkalai2">Twitter</a>
                </li>
                <li>
                    <a id="github" target="_blank" rel="noopener noreferrer" href="https://github.com/iamkalai">GitHub</a>
                </li>
                <li>
                    <a id="linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/iamkalai/">Linkedin</a>
                </li>
                <li>
                    <a id="devto" target="_blank" rel="noopener noreferrer" href="https://dev.to/iamkalai">dev.to</a>
                </li>
            </ul>
        </address>
    );
}

const ArticleTags = (props) => {
    return (
        <ul id="tags">
            {
                !(props.tags) ?
                    <></>
                    : props.tags.map((tag) => <li key={tag}>{tag}</li>)
            }
        </ul>
    );
}

const ArticleApp = (props) => {
    return (
        <ArticleTile articleID={props.match.params.articleID} />
    );
}

export default ArticleApp;




