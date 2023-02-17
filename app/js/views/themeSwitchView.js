import View from './view.js';

class ThemeSwitchView extends View {
  _parentElement = document.querySelector('fieldset');
  _colorThemes = document.querySelectorAll('[name="theme"]');

  setTheme() {
    const activeTheme = localStorage.getItem('theme');
    this._colorThemes.forEach((themeOption) => {
      if (themeOption.id === activeTheme) {
        themeOption.checked = true;
      }
    });
    //fallback for no :has() support
    document.documentElement.className = activeTheme;
  }
  addHandlerLoad(handler) {
    //apply theme
    document.addEventListener('load', handler);
  }
  addhandlerClick(handler) {
    this._parentElement.addEventListener('click', (e) => {
      const el = e.target;
      if (!e.target.classList.contains('input')) return;
      handler(el);
    });
  }
}
export default new ThemeSwitchView();
