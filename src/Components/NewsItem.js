import React from 'react';

const NewsItem = (props) => {
    return (
        <article className="newsItem">
            <img src={props.urlToImage} alt=""></img>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <div className="flex">
                <p>{props.source}</p>
                <p>{props.author}</p>
            </div>
            <a href={props.url}>Link</a>
        </article>

    );
}

export default NewsItem;