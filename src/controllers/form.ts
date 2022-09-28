import { signIn, signUp } from '../shared/api';
import { clearAccessToken, saveAccessToken } from '../shared/api/access-token';
import { thankYouDialog } from './thank-you-dialog';
import { signUpDialog } from './sign-up-dialog';
import { FieldControl, validateEmail, validatePassword } from '../shared/form';

const form = document.getElementById('signUpForm') as HTMLFormElement;

export const initForm = () => {
  const email = new FieldControl(form, 'email', validateEmail)
  const password = new FieldControl(form, 'password', validatePassword)

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = e.submitter as HTMLButtonElement;
    const isInvalidForm = [email, password].some(e => !!e.error)
    if (isInvalidForm) {
      return;
    }

    const body = {
      email: email.value,
      password: password.value,
    }

    submitBtn.disabled = true;

    signIn(body)
      .then((res) => {
        return res;
      })
      .catch(() => {
        clearAccessToken();
        return signUp(body).then((res) => {
          signUpDialog.close();
          thankYouDialog.open();
          return res;
        })
      })
      .then(res => {
        const token = res.headers.get('X-Token')!;
        saveAccessToken(token);
        window.open(`https://www.dating.com/people#token=${token}`)
        signUpDialog.close();
      })
      .finally(() => {
        submitBtn.disabled = false;
      })
  })
}
