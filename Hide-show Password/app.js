let eyeIcon = document.getElementById('eye-icon');
let password = document.getElementById('password');

eyeIcon.onclick = function () {
    if (password.type == "password") {
        password.type = "text";
        // change the icon
        eyeIcon.src="/assets/eye-open.png"
    }
    else{
        password.type = "password";
        eyeIcon.src="assets/eye-close.png"
    }
}

