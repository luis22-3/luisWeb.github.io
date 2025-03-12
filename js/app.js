let currentGoal = 'muscular';  
let currentDay = 'lunes';  

document.addEventListener('DOMContentLoaded', function() {  
    initializeApp();  
    setupEventListeners();  
});  

function initializeApp() {  
    if (document.querySelector('.goal-selector')) {  
        updateWorkoutDisplay();  
    }  
}  

function setupEventListeners() {  
    // Botones de objetivo  
    document.querySelectorAll('.goal-btn').forEach(btn => {  
        btn.addEventListener('click', function() {  
            changeGoal(this.dataset.goal);  
        });  
    });  

    // Pestañas de días  
    document.querySelectorAll('.day-tab').forEach(tab => {  
        tab.addEventListener('click', function() {  
            changeDay(this.dataset.day);  
        });  
    });  

    // Menú hamburguesa  
    const hamburgerBtn = document.querySelector('.hamburger-btn');  
    const navLinks = document.querySelector('.nav-links');  
    
    if (hamburgerBtn && navLinks) {  
        hamburgerBtn.addEventListener('click', () => {  
            navLinks.classList.toggle('active');  
        });  
    }  
}  

function changeGoal(goal) {  
    currentGoal = goal;  
    document.querySelectorAll('.goal-btn').forEach(btn => {  
        btn.classList.toggle('active', btn.dataset.goal === goal);  
    });  
    updateWorkoutDisplay();  
}  

function changeDay(day) {  
    currentDay = day;  
    document.querySelectorAll('.day-tab').forEach(tab => {  
        tab.classList.toggle('active', tab.dataset.day === day);  
    });  
    updateWorkoutDisplay();  
}  

function updateWorkoutDisplay() {  
    const workoutDetails = document.getElementById('workout-details');  
    const workout = getRutina(currentGoal, currentDay);  
    
    if (!workout) {  
        workoutDetails.innerHTML = '<p>No hay ejercicios disponibles para este día.</p>';  
        return;  
    }  

    let html = `  
        <h3>${workout.title}</h3>  
        <div class="exercises-list">  
    `;  

    workout.exercises.forEach((exercise, index) => {  
        html += `  
            <div class="exercise">  
                <div class="exercise-info">  
                    <h4>${exercise.name}</h4>  
                    <p>${exercise.sets} series x ${exercise.reps}</p>  
                </div>  
                <div class="exercise-actions">  
                    <button onclick="showExerciseDetails(${index})" class="btn">Ver detalles</button>  
                    ${auth.getCurrentUser()?.role === 'admin' ? `  
                        <button onclick="editExercise(${index})" class="btn">Editar</button>  
                        <button onclick="deleteExercise(${index})" class="btn">Eliminar</button>  
                    ` : ''}  
                </div>  
            </div>  
        `;  
    });  

    html += '</div>';  
    
    if (auth.getCurrentUser()?.role === 'admin') {  
        html += '<button onclick="addExercise()" class="btn add-exercise">Añadir Ejercicio</button>';  
    }  

    workoutDetails.innerHTML = html;  
}  

function showExerciseDetails(index) {  
    const exercise = exerciseDatabase[currentGoal][currentDay].exercises[index];  
    const modal = document.getElementById('exerciseModal');  
    
    document.getElementById('exerciseTitle').textContent = exercise.name;  
    document.getElementById('exerciseDetails').innerHTML = `  
        <p><strong>Series:</strong> ${exercise.sets}</p>  
        <p><strong>Repeticiones:</strong> ${exercise.reps}</p>  
        <p><strong>Descripción:</strong> ${exercise.description}</p>  
    `;  
    
    modal.style.display = 'flex';  
}  

function closeModal() {  
    document.getElementById('exerciseModal').style.display = 'none';  
}  

// Funciones de administración  
function addRoutine() {  
    const tipo = prompt('Ingrese el tipo de rutina (muscular/weight-loss/maintenance):');  
    const dia = prompt('Ingrese el día de la semana:');  
    const title = prompt('Ingrese el título de la rutina:');  

    if (tipo && dia && title) {  
        if (!exerciseDatabase[tipo]) {  
            exerciseDatabase[tipo] = {};  
        }  
        if (!exerciseDatabase[tipo][dia]) {  
            exerciseDatabase[tipo][dia] = {  
                title: title,  
                exercises: []  
            };  
            alert('Rutina agregada exitosamente');  
            updateWorkoutDisplay();  
        } else {  
            alert('Ya existe una rutina para ese día');  
        }  
    }  
}  

function editRoutine() {  
    const tipo = currentGoal;  
    const dia = currentDay;  
    const rutina = getRutina(tipo, dia);  

    if (rutina) {  
        const newTitle = prompt('Editar título de la rutina:', rutina.title);  
        if (newTitle) {  
            rutina.title = newTitle;  
            updateWorkoutDisplay();  
            alert('Rutina actualizada exitosamente');  
        }  
    } else {  
        alert('No hay rutina para editar');  
    }  
}  

function deleteRoutine() {  
    const tipo = currentGoal;  
    const dia = currentDay;  

    if (exerciseDatabase[tipo]?.[dia]) {  
        if (confirm('¿Está seguro de que desea eliminar esta rutina?')) {  
            delete exerciseDatabase[tipo][dia];  
            updateWorkoutDisplay();  
            alert('Rutina eliminada exitosamente');  
        }  
    } else {  
        alert('No hay rutina para eliminar');  
    }  
}  

function addExercise() {  
    const exercise = {  
        name: prompt('Nombre del ejercicio:'),  
        sets: prompt('Número de series:'),  
        reps: prompt('Número de repeticiones:'),  
        description: prompt('Descripción del ejercicio:')  
    };  

    if (exercise.name && exercise.sets && exercise.reps && exercise.description) {  
        const success = agregarEjercicio(currentGoal, currentDay, exercise);  
        if (success) {  
            updateWorkoutDisplay();  
            alert('Ejercicio agregado exitosamente');  
        } else {  
            alert('Error al agregar el ejercicio');  
        }  
    } else {  
        alert('Todos los campos son requeridos');  
    }  
}  

function editExercise(index) {  
    const exercise = exerciseDatabase[currentGoal][currentDay].exercises[index];  
    
    const updatedExercise = {  
        name: prompt('Nombre del ejercicio:', exercise.name),  
        sets: prompt('Número de series:', exercise.sets),  
        reps: prompt('Número de repeticiones:', exercise.reps),  
        description: prompt('Descripción del ejercicio:', exercise.description)  
    };  

    if (updatedExercise.name && updatedExercise.sets && updatedExercise.reps && updatedExercise.description) {  
        const success = editarEjercicio(currentGoal, currentDay, index, updatedExercise);  
        if (success) {  
            updateWorkoutDisplay();  
            alert('Ejercicio actualizado exitosamente');  
        } else {  
            alert('Error al actualizar el ejercicio');  
        }  
    } else {  
        alert('Todos los campos son requeridos');  
    }  
}  

function deleteExercise(index) {  
    if (confirm('¿Está seguro de que desea eliminar este ejercicio?')) {  
        const success = eliminarEjercicio(currentGoal, currentDay, index);  
        if (success) {  
            updateWorkoutDisplay();  
            alert('Ejercicio eliminado exitosamente');  
        } else {  
            alert('Error al eliminar el ejercicio');  
        }  
    }  
}  

// Agregar event listeners para los botones de administración  
document.addEventListener('DOMContentLoaded', function() {  
    // ... (código existente) ...  

    // Agregar listeners para botones de administración si el usuario es admin  
    if (isAdmin()) {  
        const adminControls = document.querySelector('.admin-controls');  
        if (adminControls) {  
            adminControls.innerHTML = `  
                <button onclick="addRoutine()" class="btn">Agregar Rutina</button>  
                <button onclick="editRoutine()" class="btn">Editar Rutina</button>  
                <button onclick="deleteRoutine()" class="btn">Eliminar Rutina</button>  
                <button onclick="addExercise()" class="btn">Agregar Ejercicio</button>  
            `;  
        }  
    }  
});  

// Función auxiliar para verificar si el usuario es admin  
function isAdmin() {  
    const user = JSON.parse(localStorage.getItem('user') || '{}');  
    return user.role === 'admin';  
}  

// Función para mostrar detalles del ejercicio en un modal  
function showExerciseDetails(index) {  
    const exercise = exerciseDatabase[currentGoal][currentDay].exercises[index];  
    const modal = document.getElementById('exerciseModal');  
    const modalTitle = document.getElementById('exerciseTitle');  
    const modalBody = document.getElementById('exerciseDetails');  

    modalTitle.textContent = exercise.name;  
    modalBody.innerHTML = `  
        <p><strong>Series:</strong> ${exercise.sets}</p>  
        <p><strong>Repeticiones:</strong> ${exercise.reps}</p>  
        <p><strong>Descripción:</strong> ${exercise.description}</p>  
    `;  

    modal.style.display = 'flex';  
}  

// Función para cerrar el modal  
function closeModal() {  
    document.getElementById('exerciseModal').style.display = 'none';  
}  

// Agregar event listener para cerrar el modal con Escape  
document.addEventListener('keydown', function(event) {  
    if (event.key === 'Escape') {  
        closeModal();  
    }  
});