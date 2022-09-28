import { createDialog } from '../shared/dialog';

const dialog = document.getElementById('thankYouDialog') as HTMLDialogElement;
const btn = document.getElementById('thankYouClose') as HTMLButtonElement;

const thankYouDialog = createDialog(dialog, btn);

export { thankYouDialog };
