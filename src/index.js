import './style.css';
import navbar from './nav.js';
import home from './pages/home.js';
import menu from './pages/menu.js';

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

  const nav = navbar(content);
  nav.addBtn(home);
  nav.addBtn(menu);
  // nav.addBtn('Contact', '0765782911');

  container.appendChild(nav.element());
  container.appendChild(title('Nea Ion Restaurant'));
  return container;
};

const content = home;

document.body.appendChild(top());
document.body.appendChild(content.element());

export default content;
