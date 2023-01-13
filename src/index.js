import './style.css';
import createShows from './modules/create-shows.js';
import getShows from './modules/base-api.js';

const allShowsContainer = document.querySelector('.shows-list');
const main = async () => {
  const shows = await getShows();
  const numberOfShows = shows.slice(10, 33);
  createShows(numberOfShows, allShowsContainer);
};

window.addEventListener('load', main);
