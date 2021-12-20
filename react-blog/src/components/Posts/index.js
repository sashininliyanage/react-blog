import React from 'react';

// Component
import Post from '../Post'

// Styles
import {Wrapper, Title} from './Posts.styles';

const Posts = ({posts, location}) => {
    return (
        <Wrapper>
            <Title>{location.search!=="" && <span>Search term: "{location.search.split("=")[1]}"</span>}</Title>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {posts.map((p,index)=>
            (<Post post={p} key={index}/>))}
           </div>
        </Wrapper>
    )
}

export default Posts
