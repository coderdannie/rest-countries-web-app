import View from './view.js';

class BackBtnView extends View {
  _parentElement = document.querySelector('.container');
  addhandlerClick(handler) {
    const filterSpan = document.querySelector('.Filter-span');
    const search = document.querySelector('.search');
    this._parentElement.addEventListener('click', (e) => {
      if (!e.target.closest('.back__btn')) return;
      e.preventDefault();
      filterSpan.textContent = 'Filter by Region';
      search.classList.remove('display');
      handler();
    });
  }
}
export default new BackBtnView();
