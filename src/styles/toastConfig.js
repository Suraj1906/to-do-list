import toast from 'react-hot-toast';

const toastConfig = () => {
  toast.configure({
    duration: 3000,
    position: 'top-right',
    style: {
      borderRadius: '8px',
      background: '#333',
      color: '#fff',
    },
  });
};

export default toastConfig;
