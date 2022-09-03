const slideshoelements=document.querySelectorAll(".slideshow-element");
console.log(slideshoelements);
let countElements=1;
setInterval(()=>{
 countElements++;
 let currentElement=document.querySelector('.current');
 currentElement.classList.remove("current");
if(countElements>slideshoelements.length){
    slideshoelements[0].classList.add('current');
    countElements=1;
}else{
    currentElement.nextElementSibling.classList.add('current');
}
},2000)