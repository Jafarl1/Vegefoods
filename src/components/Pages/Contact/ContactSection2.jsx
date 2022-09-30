import emailjs from '@emailjs/browser';
import React, { useRef } from 'react'

function ContactSection2({ loggedUser }) {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_id4a8sc",
            'template_59ztiin',
            form.current,
            'qIaLyS3lNkUu1vQ56'
        )
            .then((result) => {
                console.log(result.text);
                alert("Your message send:)");
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className='con-sec2'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
                        <div className="google-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.8793500846073!2d-73.99865118522601!3d40.74268024367611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bb665a5b95%3A0x37d23ed9e6c9479e!2s198%20W%2021st%20St%20%23721%2C%20New%20York%2C%20NY%2010011%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2s!4v1664191408427!5m2!1str!2s"
                                // width={100}
                                //  height={450}
                                title='map'
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>

                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 col-12">
                        <div className="form-part">
                            <form ref={form} onSubmit={sendEmail}>

                                <div className="form-group ">
                                    <input type="text" name='user_name' defaultValue={loggedUser && loggedUser.name} id='text' className="form-control" placeholder="Your Name" required />
                                </div>

                                <div className=" form-group ">
                                    <input type="email" name='user_email' defaultValue={loggedUser && loggedUser.mail} id='ml' className="form-control" placeholder="Your Email" required />
                                </div>

                                <div className="form-group">
                                    <input type="text" name='from_name' id='text' className="form-control" placeholder="Your Subject" required />
                                </div>

                                <div className="form-group">
                                    <textarea name="message" className="form-control" cols={30} rows={7} placeholder="Your Message" required />
                                </div>

                                <div className="submit-form">
                                    <button className="btn button-animated" type="submit" value="Send" name="send">
                                        <span>Send Message</span>
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection2