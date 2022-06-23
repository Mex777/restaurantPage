import page from '../pageTempl.js';
import map from '../pictures/map.png';

const contact = page('Contact', 'Bulevardul Camil Ressu, București 077160');

const phone = document.createElement('p');
phone.textContent = 'Telefon contact: 0722123987';

const div = document.createElement('div');
const img = document.createElement('img');
img.src = map;
div.style.display = 'flex';
div.style.justifyContent = 'center';
div.append(img);

contact.element().append(phone, div);
contact.element().style.textAlign = 'center';

export default contact;
