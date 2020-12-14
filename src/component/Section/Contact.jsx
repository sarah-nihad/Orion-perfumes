import React from 'react';
import Context from '../../assets/js/Context';
import Nav from '../Common/Nav';
import { withController } from 'react-scroll-parallax';
import ScrollUpButton from "react-scroll-up-button";
import { Row, Col } from 'react-bootstrap';
import Footer from '../Common/Footer';
import { TextInput, Textarea } from 'evergreen-ui';
import axios from 'axios';

// import { ToastContainer, toast } from 'react-toastify';
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      body: '',
      to: ''
    }


  }






  send() {


    axios.post(`https://cityofbeautyiq.com/sendEmail`, {
      'to': this.state.to,
      'body': this.state.body,
    })

      .then(response => {

        console.log(response.data);
        // toast.success('Email has been send successfully');
      })
      .catch(function (message) {


      });




  }

  handleLoad = () => {
    this.props.parallaxController.update();
  };
  render() {
    return (
      <Context.Consumer>
        {ctx => {

          return (
            <div>
              {/* <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnVisibilityChange
                  draggable
                  pauseOnHover
                /> */}

              <Nav />
              <div style={{ width: '100%' }} id='sectionContactBgImg' >
                <div id='p1ss'> CONTACT US </div>
              </div>


              <div id='contacthome'>


                <div id='contactpage'>

                  <Row style={{ marginRight: 0 }} id='maprow'><Col xs={12} >

                    <iframe id="gmap_canvas"
                      src="https://maps.google.com/maps?q=%D8%AD%D9%8A%20%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D8%A9&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title='map'></iframe>



                  </Col></Row>
                  <Row style={{ marginRight: 0 }} id='contactrow'>
                    <Col md={4}>
                      <p id='sarstylefont'>ADDRESS:</p>
                      <div id='contactTextAdd'>  <i className="fas fa-map-marker-alt"></i>    <span style={{ paddingLeft: '10px', color: '#fff' }} > Baghdad - Hay-Aljama'a  </span></div>

                    </Col>
                    <Col md={4}>
                      <p id='sarstylefont'> PHONES:</p>
                      <div id='contactTextAdd'><i className="fas fa-phone"></i> <span style={{ paddingLeft: '10px', color: '#fff' }} > +964 7724656560    </span>   </div>

                    </Col>
                    <Col md={4}>
                      <p id='sarstylefont'> E-MAIL:</p>
                      <div id='contactTextAdd'> <i className="fas fa-envelope-open"></i> <span style={{ paddingLeft: '10px', color: '#fff' }} > mokhtar@cityofbeautyiq.com  </span>
                      </div>

                    </Col>

                  </Row >

                </div>


                <div id='sss'>
                  <Row style={{ marginRight: 0, width: '90%', paddingTop: '3%', marginTop: '5%' }} id='sss1'>
                    <Col>
                      <div id='s1s1'>
                        <p style={{ fontSize: '26px', fontWeight: '500', lineHeight: '30px', color: '#d37541 ' }}>For More Inquiry Please Send as Email:</p>

                      </div>
                    </Col>
                  </Row>
                </div>

                <div id='sss'>

                </div>
                <div id='sss'>
                  <Row style={{ marginRight: 0, width: '90%' }} id='sss1'>
                    <Col lg={6} id='ww' >
                      <div id='area'>
                        <TextInput id='textstyle'
                          name="text-input-name" type='email'
                          placeholder="E-mail" height='40px' width='100%'
                          value={this.state.to} onChange={(e) => {
                            this.setState({ to: e.target.value })
                          }}
                        />
                      </div>
                    </Col>
                    <Col lg={6} id='ww'  >
                      <div id='area'>
                        <TextInput id='textstyle'
                          name="text-input-name"
                          placeholder="subject" height='40px' width='100%'
                          value={this.state.subject} onChange={(e) => {
                            this.setState({ subject: e.target.value })
                          }}
                        />
                      </div>
                    </Col>

                  </Row>
                  <Row style={{ marginRight: 0, width: '90%' }} id='sss1'>
                    <Col xs={12} id='ww' >
                      <div id='area'>
                        <Textarea id='ereaheight'
                          name="textarea-1"
                          placeholder="Message" value={this.state.body} onChange={(e) => {
                            this.setState({ body: e.target.value })
                          }}
                        />
                      </div>

                    </Col></Row>
                  <Row style={{ marginRight: '0px', width: '100%', marginBottom: '5%' }} >
                    <Col xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                      <div id='BtnContactUSHome' onClick={() => this.send()}>Send</div>
                    </Col>
                  </Row>
                </div>

              </div>




              <ScrollUpButton
                StopPosition={0}
                ShowAtPosition={150}
                EasingType='easeOutCubic'
                AnimationDuration={2000}
                ContainerClassName="AnyClassForContainer"
                TransitionClassName="AnyClassForTransition"
                ToggledStyle={{}}
              >
                <img src={require('../../assets/img/top-button.png')} alt='top' title='Back To Top' style={{ cursor: 'pointer' }} />
              </ScrollUpButton>
              <Footer />
            </div>



          )




        }}
      </Context.Consumer>
    )
  }
}
export default withController(Contact);