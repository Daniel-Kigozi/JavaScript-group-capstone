import './style.css';
import createShows from './modules/create-shows.js';
import getShows from './modules/shows-api.js';

const allShowsContainer = document.querySelector('.shows-list');
const main = async () => {
  const shows = await getShows();
  const firstSixShows = shows.slice(0, 23);
  createShows(firstSixShows, allShowsContainer);
};

window.addEventListener('load', main);
