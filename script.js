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

//Projects
const projects=[
    {
        image:"image/Car.jpg",
        title:"Animated Navbar",
        description:"A responsible navigation bar  smooth animations.",
    },
    {
        image:"image/Car.jpg",
        title:"Animated Navbar",
        description:"A responsible navigation bar  smooth animations.",
    },
    {
        image:"image/Car.jpg",
        title:"Animated Navbar",
        description:"A responsible navigation bar  smooth animations.",
    },
    {
        image:"image/Car.jpg",
        title:"Animated Navbar",
        description:"A responsible navigation bar  smooth animations.",
    },
    {
        image:"image/Car.jpg",
        title:"Animated Navbar",
        description:"A responsible navigation bar  smooth animations.",
    },
    {
        image:"image/Car.jpg",
        title:"Animated Navbar",
        description:"A responsible navigation bar  smooth animations.",
    },
];

const container=document.getElementById("project-container");

projects.forEach(project=>{
    const card=document.createElement("div");
    card.className="card";
    card.innerHTML=`
    <img src="${project.image}" alt="${project.title}"/>
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    `;
    container.appendChild(card);
}
);
