const init = function () {
  document.documentElement.setAttribute('data-theme', getTheme())
}

const setTheme = function (theme) {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}

const getTheme = function () {
  return localStorage.getItem('theme')
}

export default init

export { init, setTheme, getTheme }
