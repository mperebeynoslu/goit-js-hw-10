
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.querySelector('.form').addEventListener('submit', function(event) {
  event.preventDefault();

  const delay = document.querySelector('[name="delay"]').value;
  const state = document.querySelector('input[name="state"]:checked').value;

  const promise = new Promise((resolve, reject) => {
    if (state === 'fulfilled') {
      setTimeout(() => resolve(delay), delay);
    } else if (state === 'rejected') {
      setTimeout(() => reject(delay), delay);
    }
  });

  promise.then((delay) => {
    iziToast.success({
      title: 'Success',
      message: `✅ Fulfilled promise in ${delay}ms`
    });
  }).catch((delay) => {
    iziToast.error({
      title: 'Error',
      message: `❌ Rejected promise in ${delay}ms`
    });
  });
});


const customStyle = document.createElement('style');
        customStyle.textContent = `
            .form {
                display: flex;
                align-items: flex-start;
                justify-content: flex-start;
                flex-direction: column;
                gap: 8px;
            }
        `;
document.head.appendChild(customStyle);