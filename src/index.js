window.onload = function () {
  addClickHandler()
}

const addClickHandler = () => {
  document.querySelector('.promo__button').addEventListener('click', () => {
    renderModal()
  })
}

const renderModal = () => {
  let overlay = document.createElement('div')
  overlay.className = 'overlay'
  document.body.append(overlay)

  //Modal
  let modal = document.createElement('div')
  modal.className = 'modal'
  overlay.append(modal)

  let modalCloseBtn = document.createElement('div')
  modalCloseBtn.className = 'modal-close-btn'
  modal.append(modalCloseBtn)

  let closeBtn = document.createElement('button')
  closeBtn.className = 'close-btn'
  modalCloseBtn.append(closeBtn)

  //Form
  let form = document.createElement('form')
  modal.append(form)

  let fieldset = document.createElement('fieldset')
  fieldset.className = 'modal__form'
  form.append(fieldset)

  let formLegend = document.createElement('legend')
  formLegend.className = 'form__legend'
  formLegend.innerHTML = 'Войти в систему'
  fieldset.append(formLegend)

  let inputLogin = document.createElement('input')
  inputLogin.type = 'text'
  inputLogin.name = 'login'
  inputLogin.id = 'login'
  inputLogin.placeholder = 'Email/Телефон'
  fieldset.append(inputLogin)

  let inputPassword = document.createElement('input')
  inputPassword.type = 'password'
  inputPassword.name = 'password'
  inputPassword.id = 'password'
  inputPassword.placeholder = 'Пароль'
  fieldset.append(inputPassword)

  let remember = document.createElement('div')
  remember.className = 'remember'
  fieldset.append(remember)

  let inputRemember = document.createElement('input')
  inputRemember.type = 'checkbox'
  inputRemember.name = 'remember'
  inputRemember.id = 'remember'
  remember.append(inputRemember)

  let labelRemember = document.createElement('label')
  labelRemember.for = 'remember'
  labelRemember.className = 'remember__label'
  labelRemember.innerHTML = 'Запомнить пароль'
  remember.append(labelRemember)

  let restore = document.createElement('a')
  restore.href = './'
  restore.className = 'restore'
  restore.innerHTML = 'Восстановить'
  fieldset.append(restore)

  let enterBtn = document.createElement('button')
  enterBtn.className = 'enter'
  enterBtn.innerHTML = 'Войти'
  fieldset.append(enterBtn)

  let registerBtn = document.createElement('button')
  registerBtn.className = 'register'
  registerBtn.innerHTML = 'Зарегестрироваться'
  fieldset.append(registerBtn)

  const removeClickHandler = () => {
    document.querySelector('.close-btn').addEventListener('click', () => {
      return overlay.remove()
    })
  }

  removeClickHandler()
}
