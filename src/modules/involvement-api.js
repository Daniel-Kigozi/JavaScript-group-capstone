const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/oiEzvAHZtSIWS2sLpqLB/likes';

const setLikes = async (item) => {
  const getApiData = await fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify({ item_id: item }),
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
  });

  return getApiData.text();
};

const getLikes = async () => {
  const getApiData = await fetch(apiUrl);
  return getApiData.json();
};

export { setLikes, getLikes };