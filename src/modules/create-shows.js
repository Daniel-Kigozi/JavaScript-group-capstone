const createShows = (showsList, container) => {
  showsList.forEach((show) => {
    const showContainer = document.createElement('div');
    showContainer.id = `movie_${show.id}`;
    showContainer.classList.add('show-container');

    const img = document.createElement('img');
    img.src = show.image.medium;
    img.classList.add('show-img');

    showContainer.appendChild(img);

    const title = document.createElement('h3');
    title.textContent = show.name;
    title.classList.add('show-title');

    const likeWrap = document.createElement('div');
    likeWrap.classList.add('like-wrap');

    const likeBtn = document.createElement('i');
    likeBtn.classList.add('bx', 'bx-heart', 'bx-sm', 'like-btn');
    likeBtn.id = showContainer.id;

    const likes = document.createElement('span');
    likes.classList.add('like-display');
    likes.innerHTML = '0 likes';
    likeWrap.appendChild(likes);

    likeWrap.appendChild(likeBtn);

    showContainer.append(title, likeWrap);

    const commentBtn = document.createElement('button');
    commentBtn.classList.add('comment-btn');
    commentBtn.textContent = 'Comment';
    showContainer.appendChild(commentBtn);

    container.appendChild(showContainer);
  });
};

export default createShows;