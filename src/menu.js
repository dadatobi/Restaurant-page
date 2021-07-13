const menu = () => {
  const menuElem = document.createElement('div');
  menuElem.classList.add('menu-elem');
  
  const mainMenu = document.createElement('div');
  mainMenu.classList.add('main-menu');

  menuElem.appendChild(createMenus('Abacha', '₦2500'));
  menuElem.appendChild(createMenus('Amala', '₦3000'));
  menuElem.appendChild(createMenus('Eba', '₦2000'));
  menuElem.appendChild(createMenus('Efo', '₦2000'));
  menuElem.appendChild(createMenus('Egusi', '₦2000'));
  menuElem.appendChild(createMenus('Ewa Agoyin', '₦2500'));
  menuElem.appendChild(createMenus('Nkwobi', '₦6000'));
  menuElem.appendChild(createMenus('Ofada', '₦2500'));
  menuElem.appendChild(createMenus('Pounded Yam', '₦3500'));
  menuElem.appendChild(createMenus('Abacha', '₦3500'));
  menuElem.appendChild(createMenus('Fried Rice', '₦4500'));
  menuElem.appendChild(createMenus('Jollof Rice', '₦4500'));

  mainMenu.appendChild(menuElem);
  
  return mainMenu;
}

const createMenus = (name, price) => {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const foodName = document.createElement('div');
  foodName.classList.add('food-name');
  foodName.textContent = name;

  const foodImage = document.createElement('img');
  foodImage.classList.add('food-image');
  foodImage.src = `img/food/${name.toLowerCase()}.jpg`;
  foodImage.alt = `${name}`;

  const foodPrice = document.createElement('div');
  foodPrice.classList.add('food-price');
  foodPrice.textContent = `Price: ${price}`;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodPrice);

  return menuItem;
}

const loadMenu = () => {
  const pageElem = document.querySelector('.main');
  pageElem.textContent = '';

  pageElem.appendChild(menu());
}

export default loadMenu;
