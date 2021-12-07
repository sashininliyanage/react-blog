import React from 'react'

import {Wrapper} from './Sidebar.styles'
import Post from '../Post'

// Images
import img8 from '../../images/portfolio-8.jpg';
import img9 from '../../images/portfolio-9.jpg';

const Sidebar = () => {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
    
    return (
        <Wrapper>
            <h3>What's new?</h3>
            <div className="row row-cols-1 g-4">
            <Post title={"Title"} imageUrl={img8} text={text} date={"7/12/2021"}/>
            <Post title={"Title"} imageUrl={img9} text={text} date={"8/12/2021"}/>
            </div>
        </Wrapper>
    )
}

export default Sidebar
