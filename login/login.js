const signupBtn = document.querySelector("#signup-btn");
const loginForm = document.querySelector("#login-form");
const signupForm = document.querySelector("#signup-form");
const cancelBtn = document.querySelector("#cancel-btn");
const formUsernameInput = document.querySelector("#form-username");
const formPasswordInput = document.querySelector("#form-password");
const signupUsernameInput = document.querySelector("#signup-username");
const signupEmailInput = document.querySelector("#signup-email");
const signupPasswordInput = document.querySelector("#signup-password");
const passwordEye = document.querySelector(".bi-eye-slash");
const passwordInput = document.querySelector(".password-input"); 


const showSignupPage = function() {
    signupForm.classList.add("show");
    signupForm.classList.remove("hide");
    loginForm.classList.add("hide");
    loginForm.classList.remove("show");
};

const showFormPage = function() {
    signupForm.classList.add("hide");
    signupForm.classList.remove("show");
    loginForm.classList.add("show");
    loginForm.classList.remove("hide");
};

function NewAdd(u , p, e ) {
    this.username = u;
    this.email = e
    this.password = p;
}

const arr = JSON.parse(localStorage.getItem("info")) || [];

const saveDataToLocalStorage = function(data) {
    localStorage.setItem("info", JSON.stringify(data));
};

const submitLoginForm = function(event) {
    event.preventDefault();

    const username = formUsernameInput.value;
    const password = formPasswordInput.value;

    const localC = new NewAdd(username, password);
    arr.push(localC);
    saveDataToLocalStorage(arr);

    console.log(`${username}-${password}`);

    loginForm.reset();
};



const submitSignupForm = function(event) {
    event.preventDefault();

    const username = signupUsernameInput.value;
    const email = signupEmailInput.value;
    const password = signupPasswordInput.value;

    const localC = new NewAdd(username, email, password);
    arr.push(localC);
    saveDataToLocalStorage(arr);

    console.log(`${username}-${email}-${password}`);

    signupForm.reset();
};




const showPassword = function() {
    if (passwordInput.type === 'password' ) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
};




passwordEye.addEventListener('click', showPassword)
signupForm.addEventListener("submit", submitSignupForm);
loginForm.addEventListener("submit", submitLoginForm);
cancelBtn.addEventListener("click", showFormPage);
signupBtn.addEventListener("click", showSignupPage);


