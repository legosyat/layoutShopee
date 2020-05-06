function showFormRegister() {
    var idModal = document.getElementById("modal");
    idModal.style.display = "flex";

    var formRegister = document.getElementById("auth-form-register");
    formRegister.style.display = "block";
}

function showFormLogin() {
    var idModal = document.getElementById("modal");
    idModal.style.display = "flex";

    var formRegister = document.getElementById("auth-form-login");
    formRegister.style.display = "block";
}

function back() {
    var idModal = document.getElementById("modal");
    idModal.style.display = "none";

    var formRegister = document.getElementById("auth-form-register");
    formRegister.style.display = "none";

    var idModal = document.getElementById("modal");
    idModal.style.display = "none";

    var formRegister = document.getElementById("auth-form-login");
    formRegister.style.display = "none";
}