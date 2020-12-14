import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Context from '../../assets/js/Context';
import { Link } from 'react-router-dom';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
class Footer extends React.Component {
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
                        <div style={{ backgroundColor: '#0F0F0F', color: '#888888' }} >
                            <Row id='RowFooter'>
                                <Col id='ColFooter' sm={12} lg={5}>
                                    <div id='fotTiltleDiv'>
                                        <i className="fas fa-map-marker-alt" id="i2"></i>
                                        <div id="h6"> Address :  </div>
                                    </div>
                                    <p> Baghdad - Hay-Aljama'a</p>


                                    <div id='fotTiltleDiv' >
                                        <i className='fas fa-phone' id="i2"></i>
                                        <div id="h6">Mobile :</div>
                                    </div>
                                    <p>+964 7724656560    </p>

                                </Col>

                                <Col id='ColFooter' sm={12} lg={4}>
                                    <div id='fotTiltleDiv'>
                                        <i className='fas fa-envelope' id="i2"></i>
                                        <div id="h6">Email :</div>
                                    </div>
                                    <p>mokhtar@gmail.com </p>

                                    <div id='fotTiltleDiv'>
                                        <AccessTimeIcon id="i2" />
                                        <div id="h6">Work days / Hours : </div>
                                    </div>

                                    <p>Saturday - Thursday 9am to 6pm</p>
                                </Col>



                                <Col id='ColFooter' sm={12} lg={3}>
                                    {/* <p>Quick Links</p>
                                    <div style={{ backgroundColor: '#fff', height: 2, width: 120,marginBottom:15 }} /> */}
                                    <p className='QuickLInk'> <Link to='/'> Home </Link>  </p>
                                    <p className='QuickLInk'> <Link to='/'> Story  </Link> </p>
                                    <p className='QuickLInk'> <Link to='/Collection'> Collections  </Link> </p>
                                    <p className='QuickLInk'> <Link to='/Contact'>  Contact Us  </Link>   </p>
                                    <div id='footIcons'>
                                        <a href='https://www.facebook.com/103696084368620/'>
                                            <i className="fab fa-facebook-f" id='IconHomeUP'></i>
                                        </a>

                                        <a href='https://instagram.com/city_of_beautyiq?igshid=13cvyt6fdyv3f'>
                                            <i className="fab fa-instagram" id='IconHomeUP'></i>
                                        </a>
                                    </div>
                                </Col>
                            </Row>

                            <div id='RowFooterSecond'>
                                 Orion Perfumes © 2021 All rights reserved  
                             
                            </div>
                            {/* <Row id='RowFooterSecond' style={{display:'flex',alignItems:'center',justifyContent:'center'}} >
                          <a href='https://www.croczi.com/' style={{color:'gray',textDecoration:'none'}} > Powered By Croczi.com</a> 
                            </Row> */}




                        </div>
                    )
                }}
            </Context.Consumer>
        )
    }
}
export default Footer;