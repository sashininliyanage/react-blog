import React from 'react'
import { useParams } from 'react-router-dom';
// Components
import Navbar from '../Navbar';
import {Wrapper, Content} from './SinglePost.styles'
import Sidebar from '../Sidebar'
import img1 from '../../images/portfolio-1.jpg'

const SinglePost = ({user}) => {
    const { postId } = useParams();
    return ( 
        <Wrapper>
            <Navbar user={user}/>
            <Content>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Title</h5>
                    <p className="card-text"><small className="text-muted">Auther: Sashini Liyanage | Last Update: 1 hour ago</small></p>
                    <p className="card-text"></p>
                </div>
                <img src={img1} className="card-img-bottom" alt="..."/>
            </div>
            </Content>
            {/* <Sidebar/> */}
        </Wrapper>
    )
}

export default SinglePost
