import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

const navBar = () => {
  const navElem = document.createElement('nav');
  navElem.classList.add('nav-bar');

  const homeBtn = document.createElement('div');
  const menuBtn = document.createElement('div');
  const contactBtn = document.createElement('div');

  homeBtn.classList.add('home-btn');
  homeBtn.classList.add('d-btn');  
  homeBtn.classList.add('active');  
  homeBtn.textContent = 'HOME';
  
  menuBtn.classList.add('menu-btn');
  menuBtn.classList.add('d-btn');
  menuBtn.textContent = 'MENU';
  
  contactBtn.classList.add('contact-btn');
  contactBtn.classList.add('d-btn');
  contactBtn.textContent = 'CONTACT';

  navElem.appendChild(homeBtn);
  navElem.appendChild(menuBtn);
  navElem.appendChild(contactBtn);

  navElem.addEventListener('click', (e)=> {
    e.preventDefault();
    if(e.target.classList.contains('home-btn')){
      setActiveButton(homeBtn);
      loadHome();
    }else if(e.target.classList.contains('menu-btn')){
      setActiveButton(menuBtn);
      loadMenu();
    }else if(e.target.classList.contains('contact-btn')){
      setActiveButton(contactBtn);
      loadContact();
    }

  })

  return navElem;

  
}
function setActiveButton(button) {
  const buttons = document.querySelectorAll(".d-btn");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}
 
const header = () => {
  const header = document.createElement('header');
  header.classList.add('header');

  const titleElem = document.createElement('div');
  titleElem.classList.add('title-elem')
  titleElem.textContent= 'Ibilẹ';

  header.appendChild(titleElem);
  header.appendChild(navBar());

  return header;
}

const mainLoad = () => {
  const pageContent = document.createElement('div');
  pageContent.classList.add('main');
  
  return pageContent;
}

const footer = () => {
  const footerElem = document.createElement('footer');
  footerElem.classList.add('footer');

  const gitHubLink = document.createElement('a');
  gitHubLink.textContent = 'here'
  gitHubLink.href = "https://github.com/dadatobi";  

  const gitInfo = document.createElement('div');
  gitInfo.classList.add('page-info');
  gitInfo.textContent = 'Check out my Github ' ;

  const pageInfo = document.createElement('div');
  pageInfo.classList.add('page-info');
  pageInfo.classList.add('p-info');
  pageInfo.textContent = '© 2021 Ibilẹ'

  gitInfo.appendChild(gitHubLink);
  footerElem.appendChild(gitInfo);
  footerElem.appendChild(pageInfo);

  return footerElem;
}

const initialLoad =()=>{
  const domContent = document.querySelector('#content');
  
  domContent.appendChild(header());
  domContent.appendChild(mainLoad());
  domContent.appendChild(footer());

  loadHome();
}
export default initialLoad;