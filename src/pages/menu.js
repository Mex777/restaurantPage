import page from '../pageTempl.js';
import card from '../card.js';
import shaormaPic from '../pictures/shaorma.jpg';
import grill from '../pictures/gratar.jpg';
import soup from '../pictures/ciorba.jpg';
import desert from '../pictures/desert.jpg';

const menu = page('Meniu', 'Aici regasiti o lista cu preparatele noastre');

const items = document.createElement('div');
items.className = 'items';
items.appendChild(card('Shaorma', shaormaPic));
items.appendChild(card('Gratar', grill));
items.appendChild(card('Ciorbe', soup));
items.appendChild(card('Desert', desert));

menu.element().appendChild(items);

export default menu;
