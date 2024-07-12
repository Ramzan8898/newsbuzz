import React, { Component } from 'react'
import NewsBox from './NewsBox'
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page: 1,
            // loading: true,
            totalResults: 0,
            progress:0
        };
        document.title = `NewsBuzz - ${this.props.category}`
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    async componentDidMount() {
        this.props.setProgress(0)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        this.props.setProgress(30)
        let data = await fetch(url);
        let news = await data.json();
        this.setState({
            articles: news.articles,
            totalResults: news.totalResults,
            loading: false
        })
        this.props.setProgress(100)

    }

    // handleNext = async () => {
    //     if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

    //     } else {
    //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //         this.setState({ loading: true })
    //         let data = await fetch(url);
    //         let news = await data.json();
    //         this.setState({
    //             page: this.state.page + 1,
    //             articles: news.articles,
    //             loading: false
    //         });
    //     }
    // }
    // handlePrev = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //     this.setState({ loading: true });
    //     let data = await fetch(url);
    //     let news = await data.json();
    //     this.setState({
    //         page: this.state.page - 1,
    //         articles: news.articles,
    //         loading: false
    //     });
    // }

    fetchMoreData = async () => {
        this.props.setProgress(0)
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.props.setProgress(30)

        let news = await data.json();
        this.props.setProgress(70)

        this.setState({
            articles: this.state.articles.concat(news.articles),
            totalResults: news.totalResults,
            loading: false
        });
        this.props.setProgress(100)
        
    }

    render() {
        return <>
            <div className=' container my-5'>
                <h3 className='text-center'> Top {this.capitalizeFirstLetter(this.props.category)} Stories</h3>
                {this.state.loading && <Loader />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Loader />}
                >
                    <div className="row container">
                        {this.state.articles.map((element, index) => {
                            return <div className='col-md-3' key={index}>
                                <NewsBox title={element.title} desc={element.description} imageUrl={element.urlToImage}
                                    postUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} category={element.category} />
                            </div>
                        })}
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrev} className="btn btn-dark btn-sm">&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" onClick={this.handleNext} className="btn btn-dark btn-sm">Next &rarr;</button>
                </div> */}
            </div>
        </>
    }
}

export default News;
