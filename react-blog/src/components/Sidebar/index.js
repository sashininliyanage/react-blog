import React from 'react'

import {Wrapper} from './Sidebar.styles'
import './Sidebar.styles.css'


const Sidebar = () => {
    return (
        <Wrapper>

            <div className="profile-card-4 text-center"><img src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-4.jpg" className="img img-responsive"/>
            <div className="profile-content">
                <div className="profile-name">John Doe
                    <p>@johndoedesigner</p>
                </div>
                <div className="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
                <div className="row">
                    <div className="col-xs-4">
                        <div className="profile-overview">
                            <p>LIKES</p>
                            <h4>250</h4></div>
                    </div>
                    <div className="col-xs-4">
                        <div className="profile-overview">
                            <p>COMMENTS</p>
                            <h4>168</h4></div>
                    </div>
                </div>
            </div>
            </div>
            <div className="profile-card-4 text-center"><img src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-4.jpg" className="img img-responsive"/>
            <div className="profile-content">
                <div className="profile-name">John Doe
                    <p>@johndoedesigner</p>
                </div>
                <div className="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
                <div className="row">
                    <div className="col-xs-4">
                        <div className="profile-overview">
                            <p>LIKES</p>
                            <h4>250</h4></div>
                    </div>
                    <div className="col-xs-4">
                        <div className="profile-overview">
                            <p>COMMENTS</p>
                            <h4>168</h4></div>
                    </div>
                </div>
            </div>
            </div>
        </Wrapper>
    )
}

export default Sidebar