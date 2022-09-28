type ValidatorFn = (value: string) => null | string;

const ERROR_CLASS = 'field--error';

export class FieldControl {
  inputEl: HTMLInputElement;
  errorEl: HTMLElement;
  fieldEl: HTMLElement;
  error: null | string = null;

  constructor(private form: HTMLFormElement,
              private name: string,
              validator: ValidatorFn) {
    this.inputEl = this.form.querySelector(`input[name='${this.name}']`) as HTMLInputElement;
    this.fieldEl = this.inputEl.parentElement!;
    this.errorEl = this.fieldEl.querySelector('.field__error')!;

    const validateValue = () => {
      this.error = validator(this.value)
      this.errorEl.innerText = this.error ?? '';

      if (this.error) {
        this.fieldEl.classList.add(ERROR_CLASS);
      } else {
        this.fieldEl.classList.remove(ERROR_CLASS);
      }
    }

    this.inputEl.addEventListener('change', validateValue);
    this.inputEl.addEventListener('blur', validateValue);
  }

  get value() {
    return this.inputEl.value;
  }
}
