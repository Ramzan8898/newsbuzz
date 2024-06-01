import React, { Component } from 'react'
import NewsBox from './NewsBox'
export class News extends Component {
    constructor(props) {
        super();
        this.state = {
            articles: this.articles
        };
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5db21f6c18124fb7857f6cd9f8f3119f";
        let data = await fetch(url);
        let news = await data.json();
        this.setState({
            articles: news.articles
        })
    }
    render() {
        return (
            <div>
                <div className="container d-flex justify-content-between align-items-center">
                    {this.state.articles.map((element) => {
                        return <div className='col-md-4'>
                            <NewsBox title="{element.title}" desc="{element.description}" />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
