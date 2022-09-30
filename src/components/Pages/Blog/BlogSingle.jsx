import React, { useState } from 'react'
import b from './Blog.module.css'
import { useLocation } from 'react-router-dom'
import { blogs } from '../../../store/blogs'
import Swal from 'sweetalert2';
import AOS from 'aos'
import 'aos/dist/aos.css'
import user from '../../../assets/images/blog/User.png'


function BlogSingle() {

    AOS.init({
        duration: 500,
        easing: 'ease'
    });

    const { pathname } = useLocation();
    let itemID = pathname.substr(6);
    let item = blogs.find(e => e.id === +itemID);
    const [comments, setComments] = useState(item.comments);

    const postComment = (e) => {
        e.preventDefault();
        let myName = e.target.querySelector('#name').value;
        let myComment = e.target.querySelector('#text').value;

        if (myName.length > 2 && myComment.length > 2) {
            setComments(
                [...comments,
                {
                    client: e.target.querySelector('#name').value,
                    photo: user,
                    review: e.target.querySelector('#text').value
                }
                ]
            );
            Swal.fire({
                icon: 'success',
                title: 'Thank you!',
                text: 'Your comment has been added to this blog'
            });
            e.target.reset();
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'oops...',
                text: "NAME and MESSAGE fields can't be less than 3 characters!"
            });
        }
    }


    return (
        <>
            <div className={b.blog_single_page}>
                <h2 className={b.single_h2} data-aos="zoom-in">
                    {item.name}
                </h2>
                <p className={b.single_text} data-aos="zoom-in">
                    {item.t1}
                </p>
                <img src={item.img1} alt="Blog item" data-aos="zoom-in" />
                <p className={b.single_text} data-aos="zoom-in">
                    {item.t2}
                </p>
                <h2 className={b.single_h2} data-aos="zoom-in">
                    #2 {item.second}
                </h2>
                <p className={b.single_text} data-aos="zoom-in">
                    {item.t3}
                </p>
                <img src={item.img2} alt="Blog item" data-aos="zoom-in" />
                <p className={b.single_text} data-aos="zoom-in">
                    {item.t4}
                </p>
                <p className={b.single_text} data-aos="zoom-in">
                    {item.t5}
                </p>
                <p className={b.single_text} data-aos="zoom-in">
                    {item.t6}
                </p>
                <p className={b.single_text} data-aos="zoom-in">
                    {item.t7}
                </p>
                <h2 className={b.single_h2} style={{ marginTop: '60px' }} data-aos="fade-up">
                    {item.comments.length} Comments
                </h2>
                {
                    comments.map((e, i) => (
                        <div className={b.comment} key={i} data-aos="fade-up">
                            <img src={e.photo} alt="Customer" />
                            <div className={b.customer_info}>
                                <h6>
                                    {e.client}
                                </h6>
                                <p>
                                    {e.review}
                                </p>
                            </div>
                        </div>
                    ))
                }
                <h2 className={b.single_h2} style={{ margin: '100px 0 40px' }} data-aos="fade-up">
                    Leave a comment
                </h2>
                <form className={b.comment_form} onSubmit={(e) => postComment(e)} data-aos="fade-up">
                    <label htmlFor="name" data-aos="fade-left">
                        Name *
                        <input type="text" id='name' />
                    </label>
                    <label htmlFor="email" data-aos="fade-left">
                        Email
                        <input type="email" id='email' />
                    </label>
                    <label htmlFor="site" data-aos="fade-left">
                        Website
                        <input type="text" id='site' />
                    </label>
                    <label htmlFor="text" data-aos="fade-left">
                        Message *
                        <textarea name="text" id="text" cols="30" rows="10"></textarea>
                    </label>
                    <button className={b.btn} data-aos="fade-left">
                        Post Comment
                    </button>
                </form>
            </div>
        </>
    )
}

export default BlogSingle