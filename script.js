let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
let errMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';

function showToast(msg) {

    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;

    const toastBox = document.querySelector('#toast-box');
    toastBox.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 6000);
}
