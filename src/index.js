import './style.css';
import createShows from './modules/create-shows.js';
import getShows from './modules/base-api.js';
import { itemsCounter } from './modules/items-counter.js';

const tvShows = document.querySelector('.shows');
const allShowsContainer = document.querySelector('.shows-list');
const main = async () => {
  const shows = await getShows();
  const numberOfShows = shows.slice(10, 33);
  createShows(numberOfShows, allShowsContainer);
  tvShows.innerHTML = `TV Shows (${itemsCounter(numberOfShows)})`;
};

window.addEventListener('load', main);
