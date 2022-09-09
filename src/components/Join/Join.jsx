import React from 'react'
import { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

export const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9ln348c', 'template_bt3xdm8', form.current, '9HCwTiNc6qgClnKCW')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="Join" id='join-us'>
            <div className='left-j'>
                <hr />
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span> lEVEL UP</span>
                </div>


                <div>
                    <span>YOUR BODY</span>
                    <span className='stroke-text'>WITH US</span>
                </div>

            </div>
            <div className='right-j'>
                <form ref={form} action='' className='email-container' onSubmit={sendEmail}>
                    <input name='user_email' type="email" placeholder='Enter your Email address' />
                    <button className='btn btn-j'>Join Now</button>
                </form>
            </div>


        </div>
    )
}
