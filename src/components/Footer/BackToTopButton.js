import React,{useEffect,useState} from 'react';

const BackToTopButton = () => {
// const [backbutton, setBackbutton] =useState(false);

// useEffect(() =>{
// window.addEventListener("scroll",() =>{
// if(window.scrollY >100){
// setBackbutton(true) 
// } else{
// setBackbutton(false) 
// }
// } )
// },[])

const scrollUp =() =>{
window.scrollTo({
top:0,
behavior:"smooth"
})
}
return (


<button 
className='scrolltoUp' onClick={scrollUp}>

<i className="fa-solid fa-angle-up"></i></button>


);
};

export default BackToTopButton;