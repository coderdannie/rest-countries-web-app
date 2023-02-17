import icons from 'url:../../img/icons.svg';
export default class View {
  _data;
  /**
   * Render the recieved object to the DOM
   * @param {Object | Object[]} data The data to be rendered(e.g. country)
   * @returns {undefined | string}
   * @this{Object} View instance
   * @author Emmanuel Daniel (coderdannie)
   * @todo finish the implementation
   */
  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  _clear() {
    this._parentElement.innerHTML = '';
  }
  renderSpinner() {
    const markup = `
      <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>
      `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  renderError(message = this._errorMessage) {
    const markup = `
    <div class="error">
    <div>
    <i class="fa-sharp fa-solid fa-triangle-exclamation error-icon"></i>
    </div>
    <p>${message}</p>
  </div> 
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  renderMessage(message = this._message) {
    const markup = `
    <div class="message">
    <div>
    <i class="fa-sharp fa-solid fa-face-smile error-icon"></i>
    </div>
    <p>${message}</p>
  </div> 
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
