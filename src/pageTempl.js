const page = (name, description) => {
  const div = document.createElement('div');
  div.className = 'card';

  const title = document.createElement('h1');
  title.textContent = name;
  div.appendChild(title);

  const par = document.createElement('p');
  par.textContent = description;
  div.appendChild(par);

  const changeTitle = (newTitle) => {
    title.textContent = newTitle;
  };

  const changeParagraph = (newParagraph) => {
    par.textContent = newParagraph;
  };

  const element = () => div;

  return {changeTitle, changeParagraph, element};
};

export default page;
