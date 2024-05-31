import React, { Component } from 'react'
export default class NewsBox extends Component {
    render() {
        let {title, detail} = this.props
        return (
            <div>
                <div className="card my-5" style={{width: "18rem"}}>
                    <img src={"https://propakistani.pk/wp-content/uploads/2021/12/psl-PP-1.jpg"} className="card-img-top" alt="card-img-top" />
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
