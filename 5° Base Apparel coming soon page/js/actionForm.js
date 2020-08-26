const actionSubmit = () => {
  let inputText = document.getElementById("inputText").value;
  let getSpanError = document.getElementsByClassName(
    "container-body__paragraph--error-message"
  )[0];
  let getIconError = document.getElementsByClassName("icon-error")[0];
  let getForm = document.getElementsByTagName("form")[0];

  let regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

  if (regexEmail.exec(inputText)) {
    getSpanError.classList.add("hidden");
    getIconError.classList.add("hidden");
    getForm.classList.remove("border-error");
    return true;
  } else {
    getSpanError.classList.remove("hidden");
    getIconError.classList.remove("hidden");
    getForm.classList.add("border-error");
    return false;
  }
};
