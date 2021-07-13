const home = () => {
  const homeElem = document.createElement('div');
  const elem1 = document.createElement('div');
  const elem2 = document.createElement('div');

  homeElem.classList.add('home');
  elem1.classList.add('home-1');
  elem2.classList.add('home-2');

  elem1.textContent = "A taste of local flavour"

  elem2.innerHTML = "Cooked to perfection using only the finest ingredients, flavored with taste and passion. <br>Get together with your friends and family and come have dinner with us at our restaurant. We are open until 12am.<br>"

  homeElem.appendChild(elem1);
  homeElem.appendChild(elem2);
  homeElem.appendChild(btnElem());

  return homeElem;
}
const home2 = () => {
  const chefElem = document.createElement('div');
  chefElem.classList.add('chef')
  
  return chefElem;
}

const btnElem = () => {
  const divCon = document.createElement('div');
  const btnElem1 = document.createElement('button');
  const btnElem2 = document.createElement('button');

  divCon.classList.add('home-button')

  btnElem1.textContent = 'Order food';
  btnElem1.classList.add('h-btn');

  btnElem2.textContent = 'Book a Table';
  btnElem2.classList.add('h-btn');

  divCon.appendChild(btnElem1);
  divCon.appendChild(btnElem2);

  return divCon;
}

const loadHome = () => {
  const pageElem = document.querySelector('.main');
  pageElem.textContent = '';

  const mainHome = document.createElement('div');
  mainHome.classList.add('main-home');

  mainHome.appendChild(home());
  // mainHome.appendChild(home2());

  pageElem.appendChild(mainHome);
}
export default loadHome;