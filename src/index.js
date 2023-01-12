import './style.css';
import createShows from './modules/create-shows.js';
import getShows from './modules/involvement-api.js';

const allShowsContainer = document.querySelector('.shows-list');
const main = async () => {
  const shows = await getShows();
  const numberOfShows = shows.slice(0, 23);
  createShows(numberOfShows, allShowsContainer);
};

window.addEventListener('load', main);
