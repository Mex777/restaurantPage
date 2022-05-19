const page = (name, description) => {
  const div = document.createElement('div');
  div.className = 'content';

  const text = document.createElement('div');
  text.className = 'textContent';
  const title = document.createElement('h1');
  title.textContent = name;
  text.appendChild(title);

  const par = document.createElement('p');
  par.textContent = description;
  text.appendChild(par);

  div.appendChild(text);

  const changeTitle = (newTitle) => {
    title.textContent = newTitle;
  };

  const element = () => div;

  const getTitle = () => title.textContent;

  const getText = () => text;

  return {changeTitle, element, getTitle, getText};
};

export default page;
