import React, { useState, useRef } from 'react'
import a from './About.module.css'
import './aboutstyle.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'
import Swal from 'sweetalert2';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import AOS from 'aos'
import 'aos/dist/aos.css'


function About() {

  AOS.init({
    duration: 500,
    easing: 'ease'
  });

  const { countUp, customers, why } = useSelector(state => state.reducerZohrab);
  const [popUp, setPopUp] = useState(false)
  const [view, setView] = useState(false);
  const chapter = useRef();

  const Visible = () => {
    if(!chapter.current) 
    return;
    let targetPosition = {
      top: window.pageYOffset + chapter.current.getBoundingClientRect().top,
      left: window.pageXOffset + chapter.current.getBoundingClientRect().left,
      right: window.pageXOffset + chapter.current.getBoundingClientRect().right,
      bottom: window.pageYOffset + chapter.current.getBoundingClientRect().bottom
    },
      windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight
      };

    if (targetPosition.bottom > windowPosition.top &&
      targetPosition.top < windowPosition.bottom &&
      targetPosition.right > windowPosition.left &&
      targetPosition.left < windowPosition.right) {
      setView(true)
    }
    else {
      setView(false)
    };
  };

  window.addEventListener('scroll', () => {
    Visible();
  });

  const submitForm = (e) => {
    e.preventDefault();
    if (e.target.querySelector('input').value) {
      Swal.fire({
        icon: 'success',
        title: 'You have subscribed to our updates!',
        text: 'We will periodically send you updates and special offers'
      });
      e.target.reset();
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Enter your e-mail, please!'
      });
    }
  }

  return (
    <>
      <div className={a.about_page}>
        <div className={a.main} id="page_mainslider">
          <p data-aos="fade-up">
            <Link>
              home
            </Link>
            <Link>
              about us
            </Link>
          </p>
          <h1 data-aos="fade-up" data-aos-duration="800">
            about us
          </h1>
        </div>
        <div className={a.section} style={{ backgroundColor: "#F7F6F2" }}>
          <div className={a.container}>
            <div className={a.movie} id="about_movie">
              <span onClick={() => setPopUp(!popUp)}>
                <i className="fa-solid fa-play"></i>
              </span>
              <div className={popUp ? (a.popup + ' ' + a.open) : a.popup}>
                <iframe
                  src="https://player.vimeo.com/video/45830194?h=2c5541d8bc&color=ffffff&title=0&byline=0&portrait=0&badge=0"
                  title='movie'
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <i className="fa-solid fa-xmark" onClick={() => setPopUp(!popUp)}></i>
              </div>
            </div>
            <div className={a.welcome_text} data-aos="fade-up">
              <div className={a.bold_h2}>
                Welcome to Vegefoods an eCommerce website
              </div>
              <div className={a.default_p}>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                <br /><br />
                But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.
              </div>
              <Link to="/shop">
                <div className={a.btn}>
                  Shop now
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className={a.subscribe}>
          <div className={a.container}>
            <div className={a.in_cont}>
              <h2>
                Subcribe to our Newsletter
              </h2>
              <div className={a.default_p}>
                Get e-mail updates about our latest shops and special offers
              </div>
            </div>
            <div className={a.in_cont}>
              <form onSubmit={(e) => submitForm(e)}>
                <input type="email" placeholder='Enter email address' />
                <button>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className={a.section_count} id="about_sectionCount">
          <div className={a.overlay}>
            {
              countUp.map((e, i) => (
                <div className={a.chapter} ref={chapter} key={i} data-aos="fade-up">
                  <CountUp start={0} end={view ? e.max : 0} duration={2} />
                  <p> {e.text} </p>
                </div>
              ))
            }
          </div>
        </div>
        <div className={a.section2}>
          <div className={a.container + ' ' + a.testimony_head}>
            <span className={a.italic_span} data-aos="fade-up" data-aos-delay="100">
              Testimony
            </span>
            <h2 className={a.bold_h2} data-aos="fade-up" data-aos-delay="100">
              Our satisfied customer says
            </h2>
            <p className={a.default_p} data-aos="fade-up" data-aos-delay="100">
              Far far away, behind the word mountains, far from the countries Vokalia and <br /> Consonantia, there live the blind texts. Separated they live in
            </p>

            <Swiper
              slidesPerView={3}
              loop={true}
              speed={1000}
              autoplay={{ delay: 1200 }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className={a.testimony_swiper}
              data-aos="fade-up" data-aos-delay="100"
            >
              {
                customers.map((e, i) => (
                  <SwiperSlide className={a.testimony_slider} key={i}>
                    <div className={a.image}>
                      <img src={e.img} alt="Customer" />
                      <span>
                        <i className="fa-solid fa-quote-left"></i>
                      </span>
                    </div>
                    <p className={a.default_p}>
                      {e.text}
                    </p>
                    <h4>
                      {e.name}
                    </h4>
                    <span>
                      {e.prof}
                    </span>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
        <div className={a.why_section}>
          <div className={a.container + ' ' + a.why_page}>
            {
              why.map((e, i) => (
                <div className={a.item} key={i} data-aos="fade-up" data-aos-delay={e.delay}>
                  <div className={a.icon} style={{ backgroundColor: e.bg }}>
                    <img src={e.icon} alt={e.alt} />
                  </div>
                  <h3>
                    {e.heading}
                  </h3>
                  <span>
                    {e.span}
                  </span>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default About