import countryView from './views/countryView.js';
import semiCountryView from './views/semiCountryView.js';
import searchView from './views/searchView.js';
import searchRegionView from './views/searchRegionView.js';
import backBtnView from './views/backBtnView.js';
import themeSwitchView from './views/themeSwitchView.js';
import { API_URL } from './config.js';
import { getJSON } from './helper.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import themeSwitchView from './views/themeSwitchView.js';
import { async } from 'regenerator-runtime';

const controlRegionFilter = function () {
  searchRegionView.addHandlerShowRegionBtn();
  searchRegionView.filterRegion();
};

const controlSearchCountry = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return controlAllCountries();
    //loading search
    const data = await getJSON(`${API_URL}name/${query}`);
    semiCountryView._clear();
    //render search
    semiCountryView.render(data);
  } catch (err) {
    searchView.renderMessage();
  }
};
const controlCountryFullState = async function (e) {
  try {
    //loading country
    countryView.renderSpinner();
    //get country aplhacode from the country link
    const id = e.getAttribute('href').slice(-3);
    const data = await getJSON(`${API_URL}alpha/${id}`);
    //render country
    countryView.render(data);
  } catch (err) {
    //render Error
    countryView.renderError();
  }
};

const controlCountryBorders = async function (e) {
  try {
    countryView.renderSpinner();
    //get country border from the country link
    const id = e.getAttribute('href').slice(-3);
    if (!id) return;
    const data = await getJSON(`${API_URL}alpha/${id}`);
    //render country
    countryView.render(data);
  } catch (err) {
    countryView.renderError();
  }
};

const controlAllCountries = async function () {
  try {
    semiCountryView.renderSpinner();
    //load all countries
    const data = await getJSON(`${API_URL}all`);
    semiCountryView._clear();
    //render all countries
    semiCountryView.render(data);
  } catch (err) {
    //render err
    semiCountryView.renderError();
  }
};
controlAllCountries();

//theme switching functionalities
//store theme
const storeTheme = function (theme) {
  localStorage.setItem('theme', theme);
};

const controlThemeClick = function (el) {
  storeTheme(el.id);
  document.documentElement.className = el.id;
};

//initialize all handler
const init = function () {
  searchRegionView.addHandlerRegionBtn(controlRegionFilter);
  searchView.addHanderlerSearch(controlSearchCountry);
  backBtnView.addhandlerClick(controlAllCountries);
  countryView.addhandlerClick(controlCountryBorders);
  semiCountryView.addHandlerClick(controlCountryFullState);
  themeSwitchView.addhandlerClick(controlThemeClick);
  themeSwitchView.addHandlerLoad(themeSwitchView.setTheme());
};
init();
