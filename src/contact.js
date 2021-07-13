const contact = () => {
  const mainContact = document.createElement('div');
  mainContact.classList.add('main-contact');

  const contactELem = document.createElement('div');
  contactELem.classList.add('contact-elem');

  const contactTitle = document.createElement('h3');
  contactTitle.classList.add('contact-title');
  contactTitle.innerHTML = `Let's Talk About Ibilẹ Food`;
  
  const contactBtn = document.createElement('button');
  contactBtn.textContent = 'Read More';
  contactBtn.classList.add('con-btn');

  contactELem.appendChild(contactTitle);
  contactELem.appendChild(pagePara('We believe <br> Good food can help fuel a very productive day'));
  contactELem.appendChild(pagePara('You can’t rush perfection, so our kitchen makes everything fresh to order, one ingredient at a time. <br> <br>Our roots run deep, like the menu of West African cuisine in Nigeria. ¯_(ツ)_/¯.<br> Tempting taste buds since 2021. A taste of Africa in every bite'));
  contactELem.appendChild(contactBtn);

  mainContact.appendChild(contactELem);
  mainContact.appendChild(address());

  return mainContact;
}
const address = () => {
  const addressCon = document.createElement('div');
  addressCon.classList.add('local');

  const addressCon1 = document.createElement('div');
  addressCon1.classList.add('local-1');

  const addressTitle = document.createElement('div');
  addressTitle.classList.add('add-title');
  addressTitle.innerHTML = 'Address'

  const phoneNumber = document.createElement('div');
  phoneNumber.classList.add('number');
  phoneNumber.innerHTML = '☎ +234812345678';
  
  const addressElem= document.createElement('div');
  addressElem.classList.add('add-r');
  addressElem.innerHTML= '@ 567km Ikoyi, Lagos. Nigeria'

  addressCon1.append(addressTitle);
  addressCon1.append(phoneNumber);
  addressCon1.append(addressElem);

  addressCon.appendChild(addressCon1)
  return addressCon;
}

const pagePara = (content) => {
  const elem1 = document.createElement('div');
  elem1.classList.add('para-elem');
  elem1.innerHTML= content;

  return elem1;
}

const loadContact = ()=> {
  const pageElem = document.querySelector('.main');
  pageElem.textContent = '';

  pageElem.appendChild(contact());
}
export default loadContact;