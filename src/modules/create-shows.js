import getLikes from './involvement-api.js';
import { likesCounter } from './items-counter.js';

const createShows = (showsList, container) => {
  showsList.forEach((show) => {
    const { id, image: { medium }, name } = show;
    const showContainer = document.createElement('div');
    showContainer.id = `movie_${id}`;
    showContainer.classList.add('show-container');

    const img = document.createElement('img');
    img.src = medium;
    img.classList.add('show-img');
    showContainer.appendChild(img);

    const title = document.createElement('h3');
    title.textContent = name;
    title.classList.add('show-title');

    const likeBtn = document.createElement('i');
    likeBtn.classList.add('bx', 'bx-heart', 'bx-sm', 'like-btn');
    likeBtn.id = showContainer.id;

    const likes = document.createElement('span');
    likes.classList.add('like-display');
    likes.innerHTML = '0 likes';

    const likesWraper = document.createElement('div');
    likesWraper.classList.add('likes-wraper');
    likesWraper.append(likeBtn, likes);

    showContainer.append(title, likesWraper);

    const commentBtn = document.createElement('button');
    commentBtn.classList.add('comment-btn');
    commentBtn.textContent = 'Comment';
    showContainer.appendChild(commentBtn);

    container.appendChild(showContainer);

    getLikes().then((totalLikes) => {
      likesCounter(likeBtn, totalLikes, likes);
    });
  });
};

export default createShows;
