import React from 'react'
import {Link} from 'react-router-dom'

const Post = ({post}) => {
    return (
        <div className="col">
            <div className="card h-100">
                <div style={{"maxHeight": '250px', 'overflow': 'hidden'}}>
                {post.photo?(<img src={post.photo} className="card-img-top" alt="..."/>):<></>}
                </div>
            <div className="card-body">
            <Link to={`/post/${post._id}`}>
                <h5 className="card-title">{post.title}</h5>
            </Link>
                <p className="card-text customStyles">{post.desc}</p>
            </div>
            <div className="card-footer">
                <small className="text-muted">Author: {post.username} | Last Update: {post.updatedAt}</small>
            </div>
            </div>
        </div>
        )
}

export default Post
