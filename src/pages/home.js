import page from '../pageTempl.js';
import picture from '../pictures/neaIon.jpg';

const home = page('Acasa', 'Din 2014 oferim dambovitenilor cele mai atent preparate produse, zi de zi, atat in restaurantul nostru, cat si la domiciliu. Ne bucuram sa fim alegerea dumneavoastra cand doriti sa castigati timp si lasati gatitul in seama noastra. Livram in tot orasul dar si in imprejurimi, de luni pana duminica, de la ora 8 la 23, ciorbe, salate, peste, gratar, garnituri si desert.');

const div = document.createElement('div');
div.className = 'home-pic';
const pic = document.createElement('img');
pic.src = picture;
pic.style.width = '300px';
div.appendChild(pic);

home.element().appendChild(div);
home.element().style.display = 'flex';
home.element().style.justifyContent = 'center';
home.getText().style.width = '40%';

export default home;
