import { signUpDialog } from '../controllers';

export const createDialog = (dialog: HTMLDialogElement, closeBtn: HTMLElement, trigger?: HTMLElement) => {
  const close = () => dialog.close();
  const open = () => dialog.showModal();

  trigger?.addEventListener('click', () => {
    open();
  })

  closeBtn.addEventListener('click', () => {
    close();
  })

  dialog.addEventListener('keydown', (event) => {
      const key = event.key;
      if (key === 'Escape') {
        signUpDialog.close();
      }
    }
  )

  return { close, open }
}
