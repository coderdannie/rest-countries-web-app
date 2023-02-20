import View from './view.js';
class regionView extends View {
  _parentEl = document.querySelector('#searchRegion');
  _listItem = document.querySelectorAll('li');
  _regionLists = document.querySelector('#searchRegionList');
  _seachRegionIcon = document.querySelector('#searchRegionIcon');

  filterRegion() {
    this._regionLists.addEventListener('click', function (e) {
      const list = e.target.closest('li');
      const FilterSpan = document.querySelector('.Filter-span');
      if (!list) return;
      FilterSpan.textContent = list.textContent;
      if (list.textContent === 'All')
        FilterSpan.textContent = 'Filter by Region';
      const countryRegions = document.querySelectorAll('.country__region');
      countryRegions.forEach((region) => {
        region.textContent.includes(list.textContent) ||
        list.textContent === 'All'
          ? (region.parentElement.parentElement.parentElement.parentElement.style.display =
              'block')
          : (region.parentElement.parentElement.parentElement.parentElement.style.display =
              'none');
      });
    });
  }

  addHandlerShowRegionBtn() {
    this._regionLists.classList.toggle('active');
    this._seachRegionIcon.classList.toggle('icon-active');
  }
  addHandlerRegionBtn(handler) {
    this._parentEl.addEventListener('click', function () {
      handler();
    });
  }
}
export default new regionView();
