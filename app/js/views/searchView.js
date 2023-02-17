import View from './view.js';
class SearchView extends View {
  _parentElement = document.querySelector('.container');
  _parentEl = document.querySelector('#searchInput');
  _countryNames = document.querySelectorAll('.country__name');
  _message = 'No country found for your query! Pls try again!';
  _countryNames = document.querySelectorAll('.country__name');
  getQuery() {
    const query = this._parentEl.value;
    return query;
  }

  _clearInput() {
    this._parentEl.value = '';
  }
  addHanderlerSearch(handler) {
    this._parentEl.addEventListener('input', function () {
      handler();
    });
  }
}
export default new SearchView();
