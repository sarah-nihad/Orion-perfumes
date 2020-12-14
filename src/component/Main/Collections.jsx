import React from 'react';
import Context from '../../assets/js/Context';
class Collections extends React.Component {
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
                        <div className='hometab box' style={{ backgroundColor: '#000000' }}>
                            <div className='container1'>
                                <div className='tab-head'>
                                    <div className='hometab-heading box-heading'>
                                        Orion Collections
                                 </div>
                                </div>
                                <div id='collectionDiv'>
                                    <div id='collectionDivImg'>
                                        <img src={require('../../assets/img/collection1.jpg')} alt='img1' id='imgCollection'/>
                                        <div id='collectionText' >
                                            <div>ANDROMEDA</div>
                                            <div>100$</div>
                                        </div>
                                    </div>
                                    <div id='collectionDivImg'>
                                        <img src={require('../../assets/img/collection2.jpg')} alt='img1' id='imgCollection'/>
                                        <div id='collectionText' >
                                            <div>URSA</div>
                                            <div>100$</div>
                                        </div>
                                    </div>
                                    <div id='collectionDivImg'>
                                        <img src={require('../../assets/img/collection3.jpg')} alt='img1' id='imgCollection' />
                                        <div id='collectionText' >
                                            <div>RIGEL</div>
                                            <div>100$</div>
                                        </div>
                                    </div>
                                    <div id='collectionDivImg'>
                                        <img src={require('../../assets/img/collection4.jpg')} alt='img1' id='imgCollection'/>
                                        <div id='collectionText' >
                                            <div>PAVO</div>
                                            <div>100$</div>
                                        </div>
                                    </div>

                                    <div id='collectionDivImg'>
                                        <img src={require('../../assets/img/collection5.jpg')} alt='img1' id='imgCollection' />
                                        <div id='collectionText' >
                                            <div>LYRA</div>
                                            <div>100$</div>
                                        </div>
                                    </div>
                                    <div id='collectionDivImg'>
                                        <img src={require('../../assets/img/collection6.jpg')} alt='img1' id='imgCollection' />
                                        <div id='collectionText' >
                                            <div>LEO</div>
                                            <div>100$</div>
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
export default Collections;