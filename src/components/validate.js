export const validationSettings = {
  formSelector: '.membership__form',
  inputSelector: '.input',
  submitButtonSelector: '.membership__form-btn_type_submit',
  inputErrorClass: 'input_invalid',
  errorSelector: '.input__error_type_',
  errorClass: 'input__error_visible'
}

// показать ошибку
export function showError(formEl, inputEl, validationSettings) {
  const errorEl = formEl.querySelector(`${validationSettings.errorSelector}${inputEl.name}`);
  inputEl.classList.add(validationSettings.inputErrorClass); // добавить красную рамку
  errorEl.textContent = inputEl.validationMessage; // заполнить сообщение ошибки
  errorEl.classList.add(validationSettings.errorClass); // показать блок ошибки
}

// скрыть ошибку
export function hideError(formEl, inputEl, validationSettings) {
  const errorEl = formEl.querySelector(`${validationSettings.errorSelector}${inputEl.name}`);
  inputEl.classList.remove(validationSettings.inputErrorClass); // убрать красную рамку
  errorEl.classList.remove(validationSettings.errorClass); // скрыть блок ошибки
  errorEl.textContent = ''; // очистить сообщение ошибки
}

// проверить поле на ошибку
export function isValid(formEl, inputEl, validationSettings) {
  if (inputEl.validity.patternMismatch) {
    // если ошибка срабатывает из-за указанного в pattern, заменить текст ошибки на кастомное сообщение
    inputEl.setCustomValidity(inputEl.dataset.customMessage);
  } else {
    // иначе - на пустую строку для последующего заполнения стандартным сообщением
    inputEl.setCustomValidity('');
  }

  if (!inputEl.validity.valid) {
    // если в input есть ошибка - показать
    showError(formEl, inputEl, validationSettings);
  } else {
    // иначе - скрыть
    hideError(formEl, inputEl, validationSettings);
  }
}

// ф-я проверки на ошибку среди полей формы
export function hasInvalidInput(inputList) {
  return inputList.some(input => !input.validity.valid);
}

// ф-я блокировки кнопки
export function disableBtn(buttonEl) {
  buttonEl.disabled = true;
}
// ф-я разблокировки кнопки
export function enableBtn(buttonEl) {
  buttonEl.disabled = false;
}

// вынести вердикт кнопке
// (3 и 4 - необязательные аргументы, но при необходимости можно передать конкретный список инпутов для проверки и конкретную кнопку для блокировки)
export function switchBtn(form, validationSettings, fieldsetList, btnRight) {
  const inputList = fieldsetList || Array.from(form.querySelectorAll(validationSettings.inputSelector));
  const buttonEl = btnRight || form.querySelector(validationSettings.submitButtonSelector);
  if (hasInvalidInput(inputList)) {
    disableBtn(buttonEl);
  } else {
    enableBtn(buttonEl);
  }
};

// повесить слушатель (проверки на ошибку) на каждое поле формы
export function setValidListeners(formEl, validationSettings) {
  const inputList = Array.from(formEl.querySelectorAll(validationSettings.inputSelector));

  inputList.forEach((input) => {
    // проверяем поля на наличие ошибок (например, пустое поле) до того как пользователь начнет их заполнять (до события 'input')
    // в длинной многостраничной форме лучше подсветить сразу, чем пользователь будет гадать, почему нельзя нажать "завершить"
    isValid(formEl, input, validationSettings);

    input.addEventListener('input', () => {
      isValid(formEl, input, validationSettings);
      // по мере заполнения полей выносим вердикт кнопке:
      switchBtn(formEl, validationSettings);
    })
  });
}

// проверка всех форм на валидность (page - необязательный аргумент)
export function enableValidation(validationSettings, page = document) {
  const formList = Array.from(page.querySelectorAll(validationSettings.formSelector));
  formList.forEach((form) => {
    // при 1й загрузке сайта функция деактивирует кнопки
    switchBtn(form, validationSettings);
    // вешаем слушатели ошибок
    setValidListeners(form, validationSettings);
    // вешаем на каждую форму слушатель ресета (блокирует кнопки после перезагрузки формы)
    const button = form.querySelector(validationSettings.submitButtonSelector);
    form.addEventListener('reset', () => {
      disableBtn(button);
    })
  })
}
