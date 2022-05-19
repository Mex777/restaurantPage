const card = (content, pic) => {
  const div = document.createElement('div');
  div.className = 'card';

  const picture = document.createElement('img');
  picture.className = 'card-img';
  picture.src = pic;
  div.appendChild(picture);

  const body = document.createElement('div');
  body.className = 'card-body';
  const title = document.createElement('h3');
  title.textContent = content;
  title.className = 'card-text';
  body.appendChild(title);
  div.appendChild(body);

  return div;
};

export default card;
