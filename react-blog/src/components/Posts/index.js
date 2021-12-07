import React from 'react';

// Component
import Post from '../Post'

// Styles
import {Wrapper} from './Posts.styles';

// Images
import img1 from '../../images/portfolio-1.jpg';
import img2 from '../../images/portfolio-2.jpg';
import img3 from '../../images/portfolio-3.jpg';
import img4 from '../../images/portfolio-4.jpg';
import img5 from '../../images/portfolio-5.jpg';
import img6 from '../../images/portfolio-6.jpg';
import img7 from '../../images/portfolio-7.jpg';

const Posts = () => {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
    return (
        <Wrapper>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <Post title={"Title"} imageUrl={img1} text={text} date={"7/12/2021"}/>
            <Post title={"Title"} imageUrl={img2} text={text} date={"8/12/2021"}/>
            <Post title={"Title"} imageUrl={img3} text={text} date={"9/12/2021"}/>
            <Post title={"Title"} imageUrl={img4} text={text} date={"10/12/2021"}/>
            <Post title={"Title"} imageUrl={img5} text={text} date={"11/12/2021"}/>
            <Post title={"Title"} imageUrl={img6} text={text} date={"13/12/2021"}/>
            <Post title={"Title"} imageUrl={img7} text={text} date={"15/12/2021"}/>
           </div>
        </Wrapper>
    )
}

export default Posts
