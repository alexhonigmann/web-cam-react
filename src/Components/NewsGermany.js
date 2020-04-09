import React, { Component } from 'react';
import NewsItem from "./NewsItem"
import "./news.css"

class NewsGermany extends Component {
    state = {
        news: []
    }
    componentDidMount() {
        fetch('http://newsapi.org/v2/top-headlines?country=de&apiKey=4d2bf53d8b4d45588b151d485aec95a4')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data.articles);
                let newArray = []
                let randomArray = []

                while (randomArray.length !== 4) {
                    let helper = true
                    let random = Math.floor(Math.random() * data.articles.length)

                    if (randomArray.length !== 0) {
                        for (let j = 0; j < randomArray.length; j++) {
                            if (random === randomArray[j]) {
                                helper = false
                            }
                        }
                    }
                    if (helper === true) {
                        newArray.push(data.articles[random])
                        randomArray.push(random)
                    }
                }
                this.setState({ news: newArray });
            })
    };
    render() {
        return (
            <section className="news">
                {this.state.news.map((news, i) => <NewsItem key={i} urlToImage={news.urlToImage} title={news.title} description={news.description} source={news.source.name} author={news.author} url={news.url} />)}
            </section>
        );
    }
}

export default NewsGermany;