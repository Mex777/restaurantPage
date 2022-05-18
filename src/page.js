import './style.css';
import navbar from './index.js';
import page from './pageTempl.js';

const title = (content) => {
  const div = document.createElement('div');
  div.className = 'title';

  const title = document.createElement('h1');
  title.textContent = content;

  div.appendChild(title);
  return div;
};


const top = () => {
  const container = document.createElement('div');
  container.className = 'container';

  const nav = navbar();
  nav.addBtn('Acasa', 'Bine ai venit');
  nav.addBtn('Meniu', 'Shaorma');
  nav.addBtn('Galerie', 'Poze cu nea ion');
  nav.addBtn('Contact', '0765782911');

  container.appendChild(nav.element());
  container.appendChild(title('Nea Ion Restaurant'));
  return container;
};

const content = page('Home', 'Bine ai venit!');


document.body.appendChild(top());
document.body.appendChild(content.element());

export default content;
