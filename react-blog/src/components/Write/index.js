import React from 'react'

// Components
import Navbar from '../Navbar';

// Styles
import {Wrapper} from './Write.styles'

import noHeaderImg from '../../images/defaultheader.jpg'

export const Write = () => {
    return (
        <>
        <Navbar user={true}/>
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
                    <input type="text" className="form-control form-control-lg shadow-none" id="title" placeholder="Write a meaningful, unique, short name" maxLength="255" required/>
                    </div>
                <div className="mb-3">
                    <textarea className="form-control shadow-none" id="content" rows="10" required placeholder="Write content here..."></textarea>
                </div>
                <br/>
                <div className="input-group">
                    <select className="form-select shadow-none" id="inputGroupSelect01" required>
                        <option value="" >Category</option>
                        <option value="2">One</option>
                        <option value="3">Two</option>
                        <option value="4">Three</option>
                        <option value="10">Other</option>
                    </select>
                <button className="btn btn-outline-secondary customBtn" type="submit">Post</button>
                <button className="btn btn-outline-secondary customBtn" type="button">Cancle</button>
                </div>
            </div>
            </form>
        </div>
        </Wrapper>
        </>
    )
}

export default Write;