import { toast } from 'react-toastify';
const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 1000));

export const messageAdd = contact =>
  toast.success(`${contact.name} add from contacts `, {
    position: 'top-right',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: 'colored',
  });
export const messageRemove = contact => {
  toast.info(`${contact.name} removed from contacts `, {
    position: 'top-right',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: 'colored',
  });
};
export const messageError = payload =>
  toast.error(
    `User " ${payload.name} " with such a phone number " ${payload.number} " already exists`,
    {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: 'colored',
    }
  );
export const messageLoading = () => {
  toast.promise(resolveAfter3Sec, {
    pending: 'Loading',
    success: 'Loading is complete 👌',
    error: 'Promise rejected 🤯',
  });
};
