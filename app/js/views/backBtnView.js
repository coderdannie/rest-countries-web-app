import View from './view.js';

class BackBtnView extends View {
  _parentElement = document.querySelector('.container');
  addhandlerClick(handler) {
    const summary = document.querySelector('summary');
    const search = document.querySelector('.search');
    this._parentElement.addEventListener('click', (e) => {
      if (!e.target.closest('.back__btn')) return;
      e.preventDefault();
      summary.textContent = 'Filter by Region';
      search.classList.remove('display');
      handler();
    });
  }
}
export default new BackBtnView();
