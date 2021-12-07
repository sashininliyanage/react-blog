import React from 'react'

const Post = ({title,imageUrl,text,date}) => {
    return (
        <div className="col">
            <div className="card h-100">
                <div style={{"maxHeight": '250px', 'overflow': 'hidden'}}>
                {imageUrl?(<img src={imageUrl} className="card-img-top" alt="..."/>):<></>}
                </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text customStyles">{text}</p>
            </div>
            <div className="card-footer">
                <small className="text-muted">{date}</small>
            </div>
            </div>
        </div>
        )
}

export default Post
