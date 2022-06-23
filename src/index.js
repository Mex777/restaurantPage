import './style.css';
import navbar from './nav.js';
import home from './pages/home.js';
import menu from './pages/menu.js';
import contact from './pages/contact.js';
import footer from './footer.js';

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
  nav.addBtn(home);
  nav.addBtn(menu);
  nav.addBtn(contact);

  container.appendChild(nav.element());
  container.appendChild(title('Nea Ion Restaurant'));
  return container;
};

const mid = () => {
  const div = document.createElement('div');
  div.id = 'content';

  const content = home;
  div.appendChild(content.element());

  return div;
};

document.body.appendChild(top());
document.body.appendChild(mid());
document.body.appendChild(footer);

export default content;
