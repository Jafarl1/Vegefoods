import React from 'react'
import m from './Account.module.css'


function MyWishlist({ loggedUser }) {

    let wishes = loggedUser.wishlist;
    console.log(wishes);

    return (
        <>
            <div className={m.my_wishlist_page}>
                {
                    wishes.map((e, i) => (
                        <div className={m.my_wish_item} key={i}>
                            <img src={e.image} alt="Product" />
                            <h6>{e.name}</h6>
                            <span> {e.price} $ </span>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default MyWishlist