import content from './page';

const nav = () => {
  const div = document.createElement('div');
  div.className = 'nav';

  const btns = document.createElement('div');
  btns.className = 'btns';
  div.appendChild(btns);

  const addBtn = (name, description) => {
    const btn = document.createElement('button');
    btn.textContent = name;
    btns.appendChild(btn);

    btn.addEventListener('click', () => {
      content.changeTitle(name);
      content.changeParagraph(description);
    });
  };

  const element = () => div;

  return {element, addBtn};
};

export default nav;
