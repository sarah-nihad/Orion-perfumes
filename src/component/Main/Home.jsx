
import React, { Component } from 'react';
import 'react-animated-slider/build/horizontal.css';
import ScrollUpButton from "react-scroll-up-button";
import { withController } from 'react-scroll-parallax';
import { Carousel } from 'react-bootstrap';
import Footer from '../Common/Footer';
import Nav from '../Common/Nav';
import Story from './story';
import Collections from './Collections';



class Home extends Component {
  state = {
    open: true,
  }
  render() {
    return (

      <div>

        <div  >
          <Nav />
          <Carousel prevLabel={null} interval={9000}  >
            <Carousel.Item>
              <div id='slotholder' >
                <div id='tpbgimg' ></div>
              </div>

              <div className='tp-parallax-wrap' >
                <div className='tp-loop-wrap' >
                  <div className='tp-mask-wrap' >
                    <div className='tp-caption'>
                      <div className='tp-linesplit'>
                        <div className='tp-wordsplit'>
                          <div className='tp-charsplit'>
                            A
                          </div>
                          <div className='tp-charsplit1'>
                            N
                          </div>
                          <div className='tp-charsplit'>
                            D
                          </div>
                          <div className='tp-charsplit1'>
                            R
                          </div>
                          <div className='tp-charsplit'>
                            O
                          </div>
                          <div className='tp-charsplit1'>
                            M
                          </div>
                          <div className='tp-charsplit'>
                            E
                          </div>
                          <div className='tp-charsplit1'>
                            D
                          </div>
                          <div className='tp-charsplit'>
                            A
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='tp-parallax-wrap' style={{ position: 'absolute', display: 'block', visibility: 'visible', width: '100%', height: '100%', left: 0, top: 0, zIndex: 0 }} >
                <div className='tp-loop-wrap'>
                  <div className='tp-mask-wrap'>
                    <div className='tp-caption'>
                      <a>
                        <span />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div id='slotholder' >
                <div id='tpbgimg1' ></div>
              </div>

              <div className='tp-parallax-wrap' >
                <div className='tp-loop-wrap' >
                  <div className='tp-mask-wrap' >
                    <div className='tp-caption'>
                      <div className='tp-linesplit'>
                        <div className='tp-wordsplit'>
                          <div className='tp-charsplit'>
                            U
                          </div>
                          <div className='tp-charsplit1'>
                            R
                          </div>
                         <div className='tp-charsplit'>
                            S
                        </div>
                        <div className='tp-charsplit1'>
                            A
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='tp-parallax-wrap' style={{ position: 'absolute', display: 'block', visibility: 'visible', width: '100%', height: '100%', left: 0, top: 0, zIndex: 0 }} >
                <div className='tp-loop-wrap'>
                  <div className='tp-mask-wrap'>
                    <div className='tp-caption'>
                      <a>
                        <span />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div id='slotholder' >
                <div id='tpbgimg2' ></div>
              </div>

              <div className='tp-parallax-wrap' >
                <div className='tp-loop-wrap' >
                  <div className='tp-mask-wrap' >
                    <div className='tp-caption'>
                      <div className='tp-linesplit'>
                        <div className='tp-wordsplit'>
                          <div className='tp-charsplit'>
                            R
                         </div>
                          <div className='tp-charsplit1'>
                            I
                         </div>
                         <div className='tp-charsplit'>
                            G
                         </div>
                         <div className='tp-charsplit1'>
                            E
                         </div>
                         <div className='tp-charsplit'>
                            L
                         </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='tp-parallax-wrap' style={{ position: 'absolute', display: 'block', visibility: 'visible', width: '100%', height: '100%', left: 0, top: 0, zIndex: 0 }} >
                <div className='tp-loop-wrap'>
                  <div className='tp-mask-wrap'>
                    <div className='tp-caption'>
                      <a>
                        <span />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </Carousel.Item>
          </Carousel>
          <Story />
          <Collections />

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
    );
  }
}
export default withController(Home);
