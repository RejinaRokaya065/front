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
const service= [
    {
      image: "image/honda.jpg",
      title: "Service 1",
      description: "Building responsive and user-friendly websites using modern technologies.",
   
    },
    {
      image: "image/honda.jpg",
      title: "Service 2",
      description: "Creating mobile applications that provide a seamless user experience.",
    
    },
    
  ];
  const services = document.getElementById("service-container");
  services.forEach(service => { 
    const card = document.createElement("div");
    card.className="ser";
  
    card.innerHTML = `
      <img src="${service.image}" alt="${service.title}">
     
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    `;
    services.appendChild(card);
  }
  );