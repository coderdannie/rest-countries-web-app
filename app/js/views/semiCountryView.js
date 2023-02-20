import View from './view.js';
class SemiCountryView extends View {
  _parentElement = document.querySelector('.container');
  _errorMessage = 'Connection timeout!';
  _data;
  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }
  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = document.querySelector('.search');
      const links = e.target.closest('.country__link');
      if (!links) return;
      e.preventDefault();
      btn.classList.add('display');
      handler(links);
    });
  }

  _generateMarkup() {
    // console.log(this._data)
    return this._data.map(this._generateMarkupPreview).join('');
  }
  _generateMarkupPreview(countryData) {
    return `
    <div class="country">
    <a href="https://restcountries.com/v2/${
      countryData.alpha2Code
    }" class="country__link">
        <img class="country__img" src="${countryData.flags.png}" alt="" />

      <section class="country__data">
        <h2 class="country__name">${countryData.name}</h2>
        <div>
          <p class="country__row"><span>👫Population:</span> ${(+countryData.population).toLocaleString(
            'en-US'
          )}</p>
          <p class="country__row country__region"><span>Region:</span> ${
            countryData.region
          }</p>
          <p class="country__row"><span>Capital:</span> ${
            countryData.capital ? countryData.capital : 'no capital'
          }</p>
        </div>
      </section>
   </a>
  </div>
    `;
  }
}
export default new SemiCountryView();
