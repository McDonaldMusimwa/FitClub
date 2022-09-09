import React from 'react';
import './Plans.css'
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png'

export const Plans = () => {
    return (
        <div className='plans-container' id="Plans">
            <div className='blur plans-blur-1'></div>
            <div className='blur plans-blur-2'></div>
            <div className='programs-header' style={{ gap: '2rem' }}>
                <span className='stroke-text'>Ready to start</span>
                <span>Your Journey</span>
                <span className='stroke-text'>With Us Now?</span>
            </div>
            {/*Plan card*/}
            <div className='plans'>
                {plansData.map((plan, i) => {
                    return (
                        <div className='plan' key={i}>
                            {plan.icon}
                            <span>{plan.name}</span>
                            <span> R{plan.price}.00</span>
                            <div className='features'>
                                {plan.features.map((feature, i) => {
                                    return (
                                        <div className='feature'>
                                            <img src={whiteTick} alt="" />
                                            <span key={i}>{feature}</span>
                                        </div>
                                    )
                                })}
                            </div>
                            <div ><span>See more details -> </span></div>
                            <button className='btn'>Join Now</button>
                        </div>
                    )
                })}


            </div>

        </div>
    )
}
