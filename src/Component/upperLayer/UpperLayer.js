// import { useState } from 'react';
// import backimage from '../../assets/backimage.png'
import Card from '../card/Card';
import Bot from '../Icons/Bot';
import './Upperlayer.css'
import quesMark from '../../assets/quesMark.png'
import Vectormsg from '../../assets/Vectormsg.png'

function UpperLayer() {

    const msgs = ['Can I redeem my FB before the original term?', 'How do I pay my Credit card bill?', 'How can I get my Account Statement?', 'What is the tenure of Fixed Deposit?']
    return <div>
        {/* <img src={backimage} className='backimage' alt='backlogo' /> */}
        <Bot />
        <div className='cardDataOuter'>
            <div className='cardData'>
                <p className='ques'>Frequently Asked Questions <img src={quesMark} alt='quesMark' /></p>
                <div className='cardMain'>
                    {msgs.map((msg) => {
                        return <Card data={msg} />
                    }
                    )}
                </div>
            </div>
            <div className='newmsg'>
                <div className='newmsgInner'>
                    <p><img src={Vectormsg} alt='msg' /> Start a New Conversation</p>
                </div>
            </div>

        </div>
    </div>
}

export default UpperLayer;