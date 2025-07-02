document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const registerBtn = document.getElementById('registerBtn'); // botón nuevo

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        const payload = {
            email,
            password
        };

        try {
            const response = await fetch('http://127.0.0.1:5001/hospital-2ae25/us-central1/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (response.ok) {
                alert(`Bienvenido ${data.user.nombre}`);
                window.location.href = '/html/paciente/pg_principal.html';
            } else {
                alert(data.message || 'Credenciales inválidas');
            }
        } catch (error) {
            console.error('Error en login:', error);
            alert('Error en el servidor. Intenta nuevamente.');
        }
    });

    // Redirigir al formulario de registro
    if (registerBtn) {
        registerBtn.addEventListener('click', () => {
            window.location.href = 'register.html';
        });
    }
});
