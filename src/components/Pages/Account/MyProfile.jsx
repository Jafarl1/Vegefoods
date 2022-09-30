import React from 'react'
import m from './Account.module.css'

function MyProfile({ loggedUser }) {



    return (
        <>
            <div className={m.my_profile_page}>
                <div className={m.about_me}>
                    <h2>
                        {loggedUser.name} {loggedUser.surname}
                    </h2>
                    <h6>
                        <i className="fa-solid fa-key"></i>
                        {loggedUser.id}
                    </h6>
                    <h5>
                        <i className="fa-regular fa-envelope"></i>
                        {loggedUser.mail}
                    </h5>
                    <h5>
                        <i className="fa-solid fa-phone"></i>
                        {loggedUser.phone}
                    </h5>
                </div>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />
            </div>
        </>
    )
}

export default MyProfile