document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');

    console.log('Intentando obtener formulario...');
    console.log('form:', form);

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const id = document.getElementById('id').value.trim();
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();

        const payload = {
            id,
            nombre,
            email
        };

        try {
            const response = await fetch('http://127.0.0.1:5001/hospital-2ae25/us-central1/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (response.ok) {
                alert('Usuario registrado exitosamente.');
                window.location.href = 'index.html'; // o login.html si así lo prefieres
            } else {
                alert(data.message || 'Error al registrar usuario');
            }
        } catch (error) {
            console.error('Error en registro:', error);
            alert('Error en el servidor. Intenta nuevamente.');
        }
    });
});
