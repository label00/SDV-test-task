import { createDialog } from '../shared/dialog';

const signUpBtn = document.getElementById('signUpButton')!;
const signUpDialogEl = document.getElementById('signUpDialog')! as HTMLDialogElement;
const dialogCloseBtn = document.getElementById('signUpClose')!;

const signUpDialog = createDialog(signUpDialogEl, dialogCloseBtn, signUpBtn)

export { signUpDialog }
