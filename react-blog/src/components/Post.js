import React from 'react'
import {Link} from 'react-router-dom'

const Post = ({post}) => {
    const publicFolder = "http://localhost:5000/images/"
    return (
        <div className="col">
            <div className="card h-100">
                <div style={{"maxHeight": '250px', 'overflow': 'hidden'}}>
                {post.photo?(<img src={publicFolder+ post.photo} className="card-img-top" alt="..."/>):<></>}
                </div>
            <div className="card-body">
            <Link to={`/post/${post._id}`}>
                <h5 className="card-title">{post.title}</h5>
            </Link>
                <p className="card-text customStyles">{post.desc}</p>
            </div>
            <div className="card-footer">
                <small style={{"color": "#777"}}>Author: <Link to={`/posts?user=${post.username}`}>{post.username}</Link></small>
                <br/>
                <small style={{"color": "#777"}}>Last Update: {new Date(post.updatedAt).toDateString()}</small>
            </div>
            </div>
        </div>
        )
}

export default Post
