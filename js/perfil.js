document.addEventListener('DOMContentLoaded', () => {  
    const user = authManager.getCurrentUser();  
    const perfilForm = document.getElementById('perfil-form');  

    if (!user) {  
        window.location.href = 'login.html';  
        return;  
    }  

    // Cargar datos de perfil (simulado)  
    const perfilData = JSON.parse(localStorage.getItem('userProfile') || '{}');  

    // Llenar formulario con datos existentes  
    if (perfilData) {  
        document.getElementById('nombre').value = perfilData.nombre || '';  
        document.getElementById('email').value = perfilData.email || user.username;  
        document.getElementById('edad').value = perfilData.edad || '';  
        document.getElementById('peso').value = perfilData.peso || '';  
        document.getElementById('altura').value = perfilData.altura || '';  
        document.getElementById('objetivo').value = perfilData.objetivo || 'muscleGain';  

        // Mostrar datos de progreso  
        document.getElementById('peso-inicial').textContent = perfilData.pesoInicial || '--';  
        document.getElementById('peso-actual').textContent = perfilData.peso || '--';  
        
        if (perfilData.pesoInicial && perfilData.peso) {  
            const cambioPeso = (perfilData.peso - perfilData.pesoInicial).toFixed(1);  
            document.getElementById('cambio-peso').textContent = `${cambioPeso} kg`;  
        }  
    }  

    // Manejar actualización de perfil  
    perfilForm.addEventListener('submit', (e) => {  
        e.preventDefault();  

        const perfilData = {  
            nombre: document.getElementById('nombre').value,  
            email: document.getElementById('email').value,  
            edad: document.getElementById('edad').value,  
            peso: parseFloat(document.getElementById('peso').value),  
            altura: document.getElementById('altura').value,  
            objetivo: document.getElementById('objetivo').value,  
            pesoInicial: perfilData.pesoInicial || parseFloat(document.getElementById('peso').value)  
        };  

        // Guardar datos (localStorage como simulación)  
        localStorage.setItem('userProfile', JSON.stringify(perfilData));  

        alert('Perfil actualizado correctamente');  
    });  

    // Botón de logout  
    const logoutBtn = document.getElementById('logout-btn');  
    if (logoutBtn) {  
        logoutBtn.addEventListener('click', () => {  
            authManager.logout();  
        });  
    }  
});