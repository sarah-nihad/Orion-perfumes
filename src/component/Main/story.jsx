import React from 'react';
import Context from '../../assets/js/Context';
class Story extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {

        return (
            <Context.Consumer>
                {ctx => {
                    return (
                        <div id='czaboutcmsblock' >

                            <div className='container'>
                                <div className='about-store'>
                                    <div className='about-store-inner'>
                                        <div className='left-part'>
                                            <div className='one-half aboutcms1'>
                                                <div className='about-image'>
                                                    <img src={require('../../assets/img/story1.png')} alt="about-store" title="tabout-store" />
                                                </div>

                                            </div>
                                            <div className='one-half aboutcms2'>
                                                <div className='about-image'>
                                                    <img src={require('../../assets/img/story2.png')} alt="about-store" title="tabout-store" />
                                                </div>
                                            </div>

                                        </div>

                                        <div className='right-part'>
                                            <div className='mainheading'>
                                                Our Little Story
                                            </div>
                                            <div className='storedetail'>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
                                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                                                in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error

                                            </div>
                                            <div className='action-button'>
                                                < a href='/' className='shopnow-btn btn btn-primary'>Read More</a>
                                            </div>
                                            <div className='sign'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </Context.Consumer>
        )
    }
}
export default Story;