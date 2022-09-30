import React, { useState, useEffect } from 'react'
import s from './Account.module.css'
import './account.css'
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { inputs } from '../../../store/singInputs'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Swal from 'sweetalert2';


function SignUp({ setAllUsers }) {

    AOS.init({
        duration: 1000,
        easing: 'ease'
    });

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [rulesList, setRulesList] = useState(false);

    const handleChange = (e) => {
        if (e.target.id === 'firstname') {
            setFirstname(e.target.value);
        }
        else if (e.target.id === 'lastname') {
            setLastname(e.target.value);
        }
        else if (e.target.id === 'email') {
            setEmail(e.target.value);
        }
        else if (e.target.id === 'mobile') {
            setMobile(e.target.value);
        }
        else if (e.target.id === 'password') {
            setPassword(e.target.value);
        }
        else {
            setConfirm(e.target.value);
        }
    };
    const handleBlur = (e) => {
        if((e.target.id === 'mobile' && e.target.value.length < 7) || (e.target.value.length < 3)){
            e.target.nextElementSibling.classList.add('show_error');
        }
        else {
            e.target.nextElementSibling.classList.remove('show_error');
        }
    };

    useEffect(() => {
        if (firstname.length > 2 &&
            lastname.length > 2 &&
            email.length > 2 &&
            mobile.length > 6 &&
            password.length > 2 &&
            confirm.length > 2 &&
            password === confirm) {
            document.getElementById('submitFormButton').disabled = false;
        }
        else {
            document.getElementById('submitFormButton').disabled = true;
        }
    }, [firstname, lastname, email, mobile, password, confirm])

    const [users, setUsers] = useState([]);
    useEffect(() => {
        if (JSON.parse(localStorage.getItem("users"))) {
            setUsers(JSON.parse(localStorage.getItem("users")));
        }
    }, []);

    const registerUser = (e) => {
        e.preventDefault();
        let newUser = {
            name: firstname,
            surname: lastname,
            phone: mobile,
            mail: email,
            pass: password,
            history: [],
            wishlist: [],
            id: nanoid()
        };
        if (users.some(user => user.mail === newUser.mail)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops..',
                text: 'An account with this email adress already exists'
            });
        }
        else if (users.some(user => user.phone === newUser.phone)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops..',
                text: 'An account with this mobile phone number already exists'
            });
        }
        else {
            setUsers([...users, newUser]);
            Swal.fire({
                icon: 'success',
                title: 'Congratulations!',
                text: 'You have been registered successfully'
            });
            e.target.reset();
            document.getElementById('submitFormButton').disabled = true;
        }
    };

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);


    return (
        <>
            <div className={s.sign_page}>
                <div className={s.in_page} data-aos="zoom-in">
                    <form className={s.acc_form} onSubmit={(e) => registerUser(e)}>
                        <h2 className={s.acc_heading}>
                            Register
                            <span>
                                Fill up the form below to register your account.
                            </span>
                        </h2>
                        {
                            inputs.map((e, i) => (
                                <label htmlFor={e.id} key={i}> {e.label}
                                    <input
                                        type={e.type}
                                        placeholder={e.placeholder}
                                        id={e.id}
                                        onChange={(e) => handleChange(e)}
                                        onBlur={(e) => handleBlur(e)}
                                    />
                                    <span className='register_error'>
                                        <i className="fa-solid fa-triangle-exclamation"></i>
                                        Invalid {e.label}
                                    </span>
                                </label>
                            ))
                        }
                        <p className={s.protected_p}>
                            This site is protected by reCAPTCHA and the Google
                            <a href="https://policies.google.com/privacy"> Privacy Policy </a> and
                            <a href="https://policies.google.com/terms"> Terms of Service </a> apply.
                        </p>
                        <button id='submitFormButton' disabled={true}>
                            register
                        </button>
                        <p className={s.form_rules_p}>
                            If Register button is disabled, probably the form is not filled out according to the
                            <span className={s.rules_span} onClick={() => setRulesList(!rulesList)}> - Rules - </span>
                            <span id='register_rules_list'
                                className={rulesList ? 'show_rules_list' : ''}>
                                <span>1. Firstname & Lastname must be at least 3 characters.</span>
                                <span>2. Email must be at least 3 characters & contain the symbol @.</span>
                                <span>3. Mobile number must be at least 7 characters.</span>
                                <span>4. Passwords must be the same and at least 3 characters.</span>
                            </span>
                        </p>
                        <span>
                            Already have and account?
                            <Link to='/signin'>
                                Login Now!
                            </Link>
                        </span>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp