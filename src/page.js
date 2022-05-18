import Image from './pic.jpg';
import './style.css';

const main = () => {
  const container = document.createElement('div');
  container.className = 'container';

  const nav = document.createElement('div');
  nav.className = 'nav';
  const menuBtn = document.createElement('button');
  const contactBtn = document.createElement('button');
  nav.append(menuBtn, contactBtn);

  container.appendChild(nav);
  return container;
};

export default main;
