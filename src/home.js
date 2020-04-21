import React from 'react';
import './home.css';
import './style.css';
import './custom_font.css';
import { Link } from 'react-router-dom';

const username = 'iamkalai';
const perPage = 100; //If you have more articles, increase this or add pagination

const ListArticles = () => {
    const [articles, setArticles] = React.useState([]);

    const devArticles = async () => {
        const response = await fetch(`https://dev.to/api/articles?username=${username}&per_page=${perPage}`);
        const data = await response.json();
        setArticles(data);
        console.log(data);
    }

    React.useEffect(() => {
        devArticles()
    }, [])

    return (
        <ul id="blog-list">
            {
                articles.map(articleObj => <ArticleTiles key={articleObj.id} data={articleObj} />)
            }
        </ul>
    );
}

const ArticleTiles = (props) => {
    return (
        <li key={props.data.id}>
            <Link to={`/article/${props.data.id}`} className="url">
                <img src={(props.data.cover_image) ? props.data.cover_image : require('../src/assets/images/placeholder.jpg')} className="cover" alt="cover" />
                <h3 className="title">{props.data.title}</h3>
            </Link>
        </li>
    );
}

const Home = () => {
    return (
        <ListArticles />
    );
}

export default Home;