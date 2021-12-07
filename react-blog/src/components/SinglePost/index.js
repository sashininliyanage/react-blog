import React from 'react'

// Components
import {Wrapper, Content} from './SinglePost.styles'
import Sidebar from '../Sidebar'
import img1 from '../../images/portfolio-1.jpg'

const SinglePost = () => {
    return (
        <Wrapper>
            <Content>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <img src={img1} class="card-img-bottom" alt="..."/>
            </div>
            </Content>
            <Sidebar/>
        </Wrapper>
    )
}

export default SinglePost
