import './style.css';

const title = (content) => {
  const div = document.createElement('div');
  div.className = 'title';

  const title = document.createElement('h1');
  title.textContent = content;

  div.appendChild(title);
  return div;
};

export const nav = (() => {
  const div = document.createElement('div');
  div.className = 'nav';

  const btns = document.createElement('div');
  btns.className = 'btns';
  div.appendChild(btns);

  const addBtn = (name) => {
    const btn = document.createElement('button');
    btn.textContent = name;
    btns.appendChild(btn);
  };

  const element = () => div;

  return {element, addBtn};
})();

const main = () => {
  const container = document.createElement('div');
  container.className = 'container';

  nav.addBtn('Acasa');
  nav.addBtn('Meniu');
  nav.addBtn('Galerie');
  nav.addBtn('Contact');

  container.appendChild(nav.element());
  container.appendChild(title('Nea Ion Restaurant'));
  return container;
};

export default main;
