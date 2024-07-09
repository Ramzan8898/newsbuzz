import React, { Component } from 'react'
import NewsBox from './NewsBox'
import Loader from './Loader';
export class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page: 1,
            loading: false
        };
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5db21f6c18124fb7857f6cd9f8f3119f&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let news = await data.json();
        this.setState({
            articles: news.articles,
            totalResults: news.totalResults,
            loading: false
        })
    }

    handleNext = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

        } else {
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5db21f6c18124fb7857f6cd9f8f3119f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true })
            let data = await fetch(url);
            let news = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: news.articles,
                loading: false
            });
        }
    }
    handlePrev = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5db21f6c18124fb7857f6cd9f8f3119f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let news = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: news.articles,
            loading: false
        });
    }

    render() {
        return <>
            <div className='my-5'>
                {this.state.loading && <Loader />}
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrev} className="btn btn-dark btn-sm">&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" onClick={this.handleNext} className="btn btn-dark btn-sm">Next &rarr;</button>
                </div>
                <div className="row container mx-5 ">
                    {this.state.articles.map((element, index) => {
                        return <div className='col-md-3' key={index}>
                            <NewsBox title={element.title} desc={element.description} imageUrl={element.urlToImage} postUrl={element.url} />
                        </div>
                    })}
                </div>

            </div>
        </>
    }
}

export default News;
