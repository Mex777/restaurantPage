const nav = (content) => {
  const div = document.createElement('div');
  div.className = 'nav';

  const btns = document.createElement('div');
  btns.className = 'btns';
  div.appendChild(btns);

  const addBtn = (page) => {
    const btn = document.createElement('button');
    btn.textContent = page.getTitle();
    btns.appendChild(btn);

    btn.addEventListener('click', () => {
      document.body.removeChild(document.body.lastElementChild);
      document.body.appendChild(page.element());
    });
  };

  const element = () => div;

  return {element, addBtn};
};

export default nav;
