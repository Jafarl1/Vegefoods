import React, { useEffect, useState } from 'react'
import s from './Account.module.css'
import { Link, useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Swal from 'sweetalert2';


function SignIn() {

    AOS.init({
        duration: 1000,
        easing: 'ease'
    });

    const { pathname } = useLocation();
    useEffect(() => {
        if (pathname.includes('signin')) {
            localStorage.removeItem('loggedUser');
        }
    },[pathname]);

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [users, setUsers] = useState([]);
    useEffect(() => {
        if (JSON.parse(localStorage.getItem("users"))) {
            setUsers(JSON.parse(localStorage.getItem("users")));
        }
    }, []);

    const loginToAccount = (e) => {
        e.preventDefault();
        let user = users.find(e => (e.name === login && e.pass === password) || (e.mail === login && e.pass === password));
        if (user) {
            window.location.pathname = '/account/myprofile';
            localStorage.setItem('loggedUser', JSON.stringify(user));
        }
        else {
            Swal.fire({
                icon: 'error',
                title: "Unfortunately, the user wasn't found.",
                text: "If you haven't been registered, you can register using the link 'Register now!' below"
            });
        }
    };


    return (
        <>
            <div className={s.sign_page}>
                <div className={s.in_page} data-aos="zoom-in">
                    <form className={s.acc_form} onSubmit={(e) => loginToAccount(e)}>
                        <h2 className={s.acc_heading}>
                            Login
                        </h2>
                        <label htmlFor="user"> Username / Email
                            <input
                                type="text"
                                placeholder='Username / Email'
                                id='user'
                                onChange={(e) => setLogin(e.target.value)}
                            />
                        </label>
                        <label htmlFor="password"> Password
                            <input
                                type="password"
                                placeholder='********'
                                id='password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        <button>
                            login
                        </button>
                        <span>
                            Don’t have an account yet?
                            <Link to='/signup'>
                                Register Now!
                            </Link>
                        </span>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignIn