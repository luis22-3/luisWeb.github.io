class AuthManager {  
    constructor() {  
        this.users = {  
            admin: { username: 'admin', password: 'admin123', role: 'admin' },  
            user: { username: 'user', password: 'user123', role: 'user' }  
        };  
    }  

    login(username, password) {  
        const user = this.users[username];  
        if (user && user.password === password) {  
            const userData = {  
                username: user.username,  
                role: user.role,  
                token: this.generateToken()  
            };  
            localStorage.setItem('user', JSON.stringify(userData));  
            return true;  
        }  
        return false;  
    }  

    logout() {  
        localStorage.removeItem('user');  
        window.location.href = 'login.html';  
    }  

    getCurrentUser() {  
        const user = localStorage.getItem('user');  
        return user ? JSON.parse(user) : null;  
    }  

    isAuthenticated() {  
        return !!this.getCurrentUser();  
    }  

    generateToken() {  
        return Math.random().toString(36).substring(2) + Date.now().toString(36);  
    }  
}  

const auth = new AuthManager();  

// Event Listeners  
document.addEventListener('DOMContentLoaded', () => {  
    const loginForm = document.getElementById('loginForm');  
    const logoutBtn = document.getElementById('logout-btn');  

    if (loginForm) {  
        loginForm.addEventListener('submit', (e) => {  
            e.preventDefault();  
            const username = document.getElementById('username').value;  
            const password = document.getElementById('password').value;  
            const errorMsg = document.getElementById('error-message');  

            if (auth.login(username, password)) {  
                window.location.href = 'dashboard.html';  
            } else {  
                errorMsg.textContent = 'Usuario o contraseña incorrectos';  
            }  
        });  
    }  

    if (logoutBtn) {  
        logoutBtn.addEventListener('click', () => auth.logout());  
    }  

    // Protección de rutas  
    if (window.location.pathname.includes('dashboard.html')) {  
        if (!auth.isAuthenticated()) {  
            window.location.href = 'login.html';  
        } else {  
            const user = auth.getCurrentUser();  
            document.getElementById('user-role').textContent =   
                `${user.role.charAt(0).toUpperCase() + user.role.slice(1)}`;  
            
            // Mostrar/ocultar opciones según el rol  
            const adminOptions = document.getElementById('admin-options');  
            if (adminOptions) {  
                adminOptions.style.display = user.role === 'admin' ? 'block' : 'none';  
            }  
        }  
    }  
});