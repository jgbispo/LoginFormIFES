const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("btn-login");
const loginMsg = document.getElementById("input-container-msg");

function msgLogin({ msg, border, backgroud }) {
	loginMsg.style.border = border
	loginMsg.style.backgroundColor = backgroud
	loginMsg.innerHTML = `<p id="login-msg">${msg}</p>`
	console.log(msg)
}

function login() {
	const username = loginForm.uname.value;
	const password = loginForm.psw.value;

	if (username === "admin" && password === "admin") {
		const success = {
			msg: "Login Successufuly",
			border: "1px solid #148a00",
			backgroud: "#8fe596"
		}
		setTimeout(msgLogin(success), 3000);
		location.href = "login.html"
	} else {
		const error = {
			msg: "Invalid username and/or password",
			border: "1px solid #8a0000",
			backgroud: "#e58f8f"
		}
		msgLogin(error)
	}
}

function logout() {
	location.href = "index.html"
}

loginButton.addEventListener("click", (e) => {
	e.preventDefault();
	if (location.pathname != "/login.html") {
		login()
	} else {
		logout()
	}
})
