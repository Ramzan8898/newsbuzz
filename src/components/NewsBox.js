import React, { Component } from 'react'
import placeholder from "../media/placeholder.jpg"
export default class NewsBox extends Component {
    render() {
        let { title, desc, imageUrl, postUrl, author, source } = this.props;
        return (
            <div className=' position-relative'>
                <span className="badge text-bg-danger position-absolute end-0 translate-middle z-1" >{source}</span>
                <div className="card my-5">
                    <a href={postUrl}><img className="card-img-top object-fit-cover " alt="card-img" height={200} src={imageUrl ? imageUrl : placeholder} /></a>
                    <div className="card-body">
                        <a href={postUrl} className='text-decoration-none'><h6 className="card-title text-dark">{title}</h6></a>
                        <p style={{ fontSize: '13px', color: "#4285F4" }}> By {author ? author : "Unknown"}</p>
                        <p className="card-text fs-6">{desc}</p>
                        <a href={postUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}
