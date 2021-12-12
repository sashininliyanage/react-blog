import React from 'react';

// Component
import Post from '../Post'

// Styles
import {Wrapper} from './Posts.styles';

const Posts = ({posts}) => {
    return (
        <Wrapper>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {posts.map((p,index)=>
            (<Post post={p} key={index}/>))}
           </div>
        </Wrapper>
    )
}

export default Posts
