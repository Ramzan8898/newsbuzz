import React, { Component } from 'react'
import NewsBox from './NewsBox'
export class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5db21f6c18124fb7857f6cd9f8f3119f";
        let data = await fetch(url);
        let news = await data.json();
        console.log(news);
        this.setState({
            articles: news.articles
        })
    }
    render() {
        return (
            <div>
                <div className="row container mx-5">
                    {this.state.articles.map((element, index) => {
                        return <div className='col-md-3' key={index}>
                            <NewsBox title={element.title} desc={element.description} imageUrl={element.urlToImage} postUrl={element.url}/>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
