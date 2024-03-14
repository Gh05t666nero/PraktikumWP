
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirm_password');
        const concentrationInput = document.getElementById('concentration');
        const religionInput = document.getElementById('religion');

        let isValid = true;

        // Validasi Nama
        if (nameInput.value.trim() === '') {
            nameInput.style.borderColor = 'red';
            isValid = false;
        } else {
            nameInput.style.borderColor = '';
        }

        // Validasi Email
        if (emailInput.value.trim() === '') {
            emailInput.style.borderColor = 'red';
            isValid = false;
        } else {
            emailInput.style.borderColor = '';
        }

        // Validasi Kata Sandi
        if (passwordInput.value.length < 8) {
            passwordInput.style.borderColor = 'red';
            document.getElementById('password_error').textContent = 'Kata sandi harus memiliki minimal 8 karakter.';
            isValid = false;
        } else {
            passwordInput.style.borderColor = '';
            document.getElementById('password_error').textContent = '';
        }

        // Validasi Konfirmasi Kata Sandi
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordInput.style.borderColor = 'red';
            document.getElementById('confirm_password_error').textContent = 'Konfirmasi kata sandi tidak cocok.';
            isValid = false;
        } else {
            confirmPasswordInput.style.borderColor = '';
            document.getElementById('confirm_password_error').textContent = '';
        }

        // Validasi Peminatan Konsentrasi
        if (concentrationInput.value === '') {
            concentrationInput.style.borderColor = 'red';
            isValid = false;
        } else {
            concentrationInput.style.borderColor = '';
        }

        // Validasi Agama
        if (religionInput.value === '') {
            religionInput.style.borderColor = 'red';
            isValid = false;
        } else {
            religionInput.style.borderColor = '';
        }

        if (isValid) {
            alert("Pendaftaran berhasil!");
        }
    });
});
