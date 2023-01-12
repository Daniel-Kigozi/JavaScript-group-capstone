export const postComment = async (id, user, comment) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HsXsc6uMLmtj8MbezH0L/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username: user,
      comment,

    }),
  });
  const data = await response.text();
  return data;
};

export const getComments = async (itemid) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HsXsc6uMLmtj8MbezH0L/comments?item_id=${itemid}`);

  const data = await response.json();

  if (!response.ok) {
    return [];
  }

  return data;
};

export const createCommentSpan = (commData) => {
  const commentSpan = document.createElement('span');
  commentSpan.className = 'comment-span';
  commentSpan.innerHTML = `
      <p>${commData.creation_date}:</p>
      <p>${commData.username}:</p>
      <p>${commData.comment}</p>
    `;
  return commentSpan;
};

export const generateComments = async (id) => {
  const innerCommentsDiv = document.createElement('div');
  innerCommentsDiv.innerHTML = '';
  const comments = await getComments(id);

  comments.forEach((comment) => {
    innerCommentsDiv.append(createCommentSpan(comment));
  });
  return innerCommentsDiv;
};