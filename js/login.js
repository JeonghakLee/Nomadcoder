const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUserName = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
    event.preventDefault();  // broswer의 default동작을 방지(submit하면 새로고침하는 것 등)
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreeting();
}

function paintGreeting(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(savedUserName);
}
// event listner의 첫번째 argument는 방금 일어난 이벤트에 대한 정보
