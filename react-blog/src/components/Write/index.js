import React from 'react'

// Components
import Navbar from '../Navbar';

// Styles
import {Wrapper} from './Write.styles'

import noHeaderImg from '../../images/defaultheader.jpg'

export const Write = () => {
    return (
        <>
        <Navbar/>
        <Wrapper>
        <div className="card mb-3">
        <form action="">
       
        <div className="mb-3" style={{display:"none"}}>
            <input className="form-control" type="file" id="headerImage"/>
        </div>
            <label htmlFor="headerImage" style={{width:"100%"}} >  
            <img src="..." className="card-img-top header" onError={(e)=>{e.target.onerror = null; e.target.src=noHeaderImg}}/>
            </label>
            <div className="card-body">
                
                <div className="mb-3">
                    <input type="text" className="form-control form-control-lg" id="title" placeholder="Write a meaningful, unique, short name" maxLength="255" required/>
                    </div>
                <div className="mb-3">
                    <textarea className="form-control" id="content" rows="10" required placeholder="Write content here..."></textarea>
                </div>
                <button className="btn customBtn" type="submit">Post</button>
            </div>
            </form>
        </div>
        </Wrapper>
        </>
    )
}

export default Write;