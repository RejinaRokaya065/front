const hamburger=document.getElementById('hamburger');
const navlinks=document.getElementById('navlinks');

hamburger.addEventListener ('click' ,()=>{
    navlinks.classList.toggle('active');
});
const text="Hi! I'm Rejina";
const typedText =document.getElementById('typed-text');
let index=0;

function type(){
    if(index < text.length){
        typedText.textContent += text.charAt(index);
        index++;
        setTimeout(type,150);
    }
}
type();