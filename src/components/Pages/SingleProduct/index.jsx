import React from 'react'
import Rating from '@mui/material/Rating';
import {Grid} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import './style.css'
import { Link } from 'react-router-dom';
export const SingleProduct = () => {


   
  const dispatch=useDispatch();
  const singlepro=useSelector((state)=>state.singleObject);
  const addCart=(item)=>{
    dispatch({type:"ADD", payload:item});
    }
  

  return (
    <div>
      <div className='div-img'>
        <h1>Product single</h1>
      </div>
      {
        singlepro.name &&
      
      <Grid container marginTop={'70px'} >
        <Grid xs={12} lg={6}>
          <div>
<img src={require(`../../../assets/images/products/${singlepro?.image}`)} className="img-single"/>
</div>
        </Grid>
      <Grid item xs={12} lg={6} padding="10px">
<h3 className='header-single'>{singlepro?.name}</h3>
<div className='rating'>
  <p className='score'>
   <span>5.0</span> 
    {/* <span> */}
    <Rating
        name="simple-controlled"
        value={'5'}
        readOnly
      />
    {/* </span> */}
  </p>
  <p>
    <span>100</span>
   <span className='label'>Rating</span>
  </p>
  <p>
    <span>500</span>
    <span className='label'>Sold</span>
  </p>
</div>
<p className='pricesingle'>
  <span>{`$${singlepro?.price}.00`}</span>
</p>
<p className='detail'>
A small river named Duden flows by their place and supplies it with the necessary regelialia. 
It is a paradisematic country, in which roasted parts of sentences fly into your mouth. 
Text should turn around and return to its own, safe country. 
But nothing the copy said could convince her and so it didn’t take long until.
</p>
<div className='info'>
<div className='buttons'>
<button className='button-dec' 
disabled={singlepro?.quantity===1? true:false}
onClick={()=>dispatch({type:"DEC", payload:singlepro?.quantity})}>-</button>
<button className='button-count'>{singlepro?.quantity}</button>
<button className='button-dec' onClick={()=>dispatch({type:"INC", payload:singlepro?.quantity})}>+</button>
</div>
<p className='size'>600 kg available</p>
<Link style={{all:"unset"}} to="/cart"><button className='btn-add' onClick={()=>addCart(singlepro)}>Add to cart</button></Link>
</div>
        </Grid>
        </Grid>
}
    </div>
  )
}
