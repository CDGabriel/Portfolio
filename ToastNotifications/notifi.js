let toastBox = document.querySelector(".toastBox");
let successMsg = '<img src="icons/check.png">Succesfully submitted';
let errorMsg = '<img src="icons/remove.png">Please fix the error';
let invalidMsg = '<img src="icons/warning.png">Invalid';

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("error")) {
    toast.classList.add("error");
  }
  if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
  }
  setTimeout(() => {
    toast.remove();
  }, 5000);
}
