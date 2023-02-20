import View from './view';
class CountryView extends View {
  _parentElement = document.querySelector('.container');
  _errorMessage = 'Network error!';

  addhandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const searchContainer = document.querySelector('.search');
      const border = e.target.closest('.countryborderLink');
      if (!e.target.closest('.countryborderLink')) return;
      e.preventDefault();
      searchContainer.classList.add('display');
      handler(border);
    });
  }

  _generateMarkup() {
    return `
    <div>
    <div class="back__btn-container" >
   <buttion class="back__btn">
  <i class="fa-sharp fa-solid fa-arrow-left back__btn-icon"></i>
  <span>Back</span>
 </buttion>
    </div>
    <section class="full-data">
    <img class="full-data__img" src="${this._data.flags.png}" alt="" />
    <div class="full-data__content">
      <h2>${this._data.name}</h2>
      <section class="full-data__block">
        <ul class="full-data__lists">
          <li><span>Native Name:</span> ${this._data.nativeName}</li>
          <li><span>Population:</span>  ${this._data.population.toLocaleString(
            'en-US'
          )}</li>
          <li><span>Region:</span>   ${this._data.region}</li>
          <li><span>Sub Region:</span>  ${this._data.subregion}</li>
          <li><span>Capital:</span>   ${
            this._data.capital ? this._data.capital : 'no capital'
          }</li>
        </ul>
        <ul class="full-data__lists">
          <li><span>Top Level Domain:</span>  ${this._data.topLevelDomain}</li>
          <li><span>Currencies:</span>  ${Object.values(
            this._data.currencies
          ).map((currencies) => currencies.name)}</li>
          <li><span>Languages:</span> ${Object.values(this._data.languages).map(
            (languages) => languages.name
          )} </li>
        </ul>
      </section>
      <section class="full-data__border flex flex-fw-w">
        <h4 class="full-data__border-title flex flex-ai-c">
          Border Countries:
        </h4>
        <div class="full-data__countries-borders flex flex-fw-w ">
        ${
          this._data.borders
            ? this._data.borders
                .map((el) => {
                  return `
            <a href="https://restcountries.com/v2/alpha/${el}" class="full-data__border-country countryborderLink">${el}</a>
            `;
                })
                .join('')
            : 'no border country'
        }
        </div>
      </section>
    </div>
    </section>
    `;
  }
}

export default new CountryView();
