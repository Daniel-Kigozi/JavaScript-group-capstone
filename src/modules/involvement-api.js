const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/oiEzvAHZtSIWS2sLpqLB/likes';

const getLikes = async () => {
  const getApiData = await fetch(apiUrl);
  return getApiData.json();
};

export default { getLikes };