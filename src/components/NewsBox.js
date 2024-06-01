import React, { Component } from 'react'
export default class NewsBox extends Component {
    render() {
        let { title, detail } = this.props;
        return (
            <div>
                <div className="card my-5" style={{ width: "18rem" }}>
                    <img src={"https://static.vecteezy.com/system/resources/previews/035/847/876/original/icc-men-s-t20-world-cup-logo-2024-free-vector.jpg"} className="card-img-top" alt="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{detail}</p>
                        <a href="/link" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}
