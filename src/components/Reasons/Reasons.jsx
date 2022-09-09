import React from 'react';
import './Reasons.css'
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';


export const Reasons = () => {
    return (
        <div className='Reasons' id="Reasons">
            <div className='left-r'>
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>
            <div className='right-r'>
                <span>some reason</span>
                <div>
                    <span className='stroke-text'>Why</span>
                    <span> choose us?</span>
                </div>
                <div className='details-r'>
                    <div>
                        <img src={tick} alt='' />
                        <span>Over +100 Expert Coaches</span>
                    </div>
                    <div>
                        <img src={tick} alt='' />
                        <span>TRAIN SMART AND FASTER</span>
                    </div>
                    <div>
                        <img src={tick} alt='' />
                        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </div>
                    <div>
                        <img src={tick} alt='' />
                        <span>REALIABLE PARTNERS</span>
                    </div>
                    <span
                        style={{
                            color: 'var(--gray)',
                            fontWeight: 'normal',
                        }}
                    >
                        OUR PARTNERS
                    </span>
                    <div className='partners'>
                        <img src={ nb } alt="" />
                        <img src={ adidas } alt="" />
                        <img src={ nike } alt="" />

                    </div>
                </div>

            </div>


        </div >
    )
}