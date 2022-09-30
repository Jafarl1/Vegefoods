import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import acc from './Account.module.css'
import SignIn from './SignIn';
import MyProfile from './MyProfile';
import MyHistory from './MyHistory';
import MyWishlist from './MyWishlist';

function Account({ loggedUser, setLoggedUser }) {

    const { pathname } = useLocation();

    const logOut = () => {
        setLoggedUser(undefined);
        localStorage.removeItem('loggedUser');
    };


    return (
        <>
            <div className={acc.acc_page}>
                {
                    loggedUser ?
                        <div className={acc.my_account}>
                            <nav className={acc.acc_nav}>
                                <ul>
                                    <li>
                                        <Link to='/account/myprofile' className={pathname.includes('myprofile') ? acc.active_link : ''} >
                                            <i className="fa-solid fa-id-card"></i>
                                            <span>
                                                Profile
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/account/myhistory' className={pathname.includes('myhistory') ? acc.active_link : ''} >
                                            <i className="fa-solid fa-credit-card"></i>
                                            <span>
                                                Purchase history
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/account/mywishlist' className={pathname.includes('mywishlist') ? acc.active_link : ''} >
                                            <i className="fa-regular fa-heart"></i>
                                            <span>
                                                Wishlist
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/signin' onClick={() => logOut()}>
                                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                            <span>
                                                Log out
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className={acc.acc_section}>
                                {
                                    pathname.includes('myprofile') ? <MyProfile loggedUser={loggedUser} />
                                        : pathname.includes('myhistory') ? <MyHistory loggedUser={loggedUser} />
                                            : pathname.includes('mywishlist') ? <MyWishlist loggedUser={loggedUser} />
                                                : ''
                                }
                            </div>
                        </div>
                        :
                        <SignIn />
                }
            </div>
        </>
    )
}

export default Account