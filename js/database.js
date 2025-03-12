const exerciseDatabase = {  
    // Ejercicios para ganar masa muscular  
    muscular: {  
        lunes: {  
            title: "Lunes: Pecho y Tríceps",  
            exercises: [  
                { name: "Press de banca plano", sets: "4", reps: "8-10", description: "Acuéstate en el banco plano, agarra la barra con las manos un poco más separadas que el ancho de los hombros. Baja la barra hasta el pecho y empuja hacia arriba." },  
                { name: "Press de banca inclinado", sets: "3", reps: "10-12", description: "Similar al press de banca plano pero en un banco inclinado a 30-45 grados para trabajar la parte superior del pecho." },  
                { name: "Aperturas con mancuernas", sets: "3", reps: "12-15", description: "Acuéstate en un banco plano con una mancuerna en cada mano. Extiende los brazos sobre el pecho y luego bájalos hacia los lados en un movimiento de arco." },  
                { name: "Fondos en paralelas", sets: "3", reps: "10-12", description: "Sujétate en las barras paralelas con los brazos extendidos, baja el cuerpo flexionando los codos y luego vuelve a subir." },  
                { name: "Extensiones de tríceps con polea", sets: "3", reps: "12-15", description: "De pie frente a la polea alta, agarra la cuerda con ambas manos. Mantén los codos pegados al cuerpo y extiende los brazos hacia abajo." }  
            ]  
        },  
        martes: {  
            title: "Martes: Espalda y Bíceps",  
            exercises: [  
                { name: "Dominadas", sets: "4", reps: "8-10", description: "Agárrate a la barra con las palmas hacia adelante, tira de tu cuerpo hacia arriba hasta que la barbilla supere la barra." },  
                { name: "Remo con barra", sets: "3", reps: "10-12", description: "Inclínate hacia adelante con la espalda recta, agarra la barra y tira hacia tu abdomen inferior manteniendo los codos cerca del cuerpo." },  
                { name: "Remo con mancuerna", sets: "3", reps: "12-15", description: "Apoya una rodilla y una mano en un banco, con la otra mano sujeta una mancuerna. Tira de la mancuerna hacia arriba manteniendo el codo cerca del cuerpo." },  
                { name: "Curl de bíceps con barra", sets: "3", reps: "10-12", description: "De pie, sostén una barra con las palmas hacia arriba. Dobla los codos para levantar la barra hacia los hombros." },  
                { name: "Curl de bíceps con mancuernas", sets: "3", reps: "12-15", description: "De pie, sostén una mancuerna en cada mano con las palmas hacia adelante. Dobla los codos para levantar las mancuernas hacia los hombros." }  
            ]  
        },  
        miercoles: {  
            title: "Miércoles: Descanso o Cardio Ligero",  
            exercises: [  
                { name: "Cardio moderado (opcional)", sets: "1", reps: "20-30 min", description: "Realiza actividad cardiovascular de intensidad moderada como caminar rápido, bicicleta estática o elíptica para mejorar la recuperación muscular." }  
            ]  
        },  
        jueves: {  
            title: "Jueves: Piernas",  
            exercises: [  
                { name: "Sentadillas", sets: "4", reps: "8-10", description: "De pie con los pies separados al ancho de los hombros, baja flexionando las rodillas como si fueras a sentarte, mantén la espalda recta y luego vuelve a subir." },  
                { name: "Prensa de piernas", sets: "3", reps: "10-12", description: "En la máquina de prensa, empuja la plataforma alejándola de ti extendiendo las piernas y luego regresa controladamente." },  
                { name: "Extensiones de cuádriceps", sets: "3", reps: "12-15", description: "Siéntate en la máquina de extensiones y extiende las piernas levantando el peso, luego baja controladamente." },  
                { name: "Curl de isquiotibiales", sets: "3", reps: "12-15", description: "Túmbate boca abajo en la máquina de curl de isquiotibiales, dobla las piernas para levantar el peso y luego baja controladamente." },  
                { name: "Elevaciones de pantorrilla", sets: "4", reps: "15-20", description: "De pie con la parte delantera de los pies sobre un escalón o plataforma, levanta los talones lo más alto posible y luego baja controladamente." }  
            ]  
        },  
        viernes: {  
            title: "Viernes: Hombros y Abdominales",  
            exercises: [  
                { name: "Press militar", sets: "4", reps: "8-10", description: "Sentado o de pie, sostén una barra o mancuernas a la altura de los hombros. Empuja el peso hacia arriba hasta la extensión completa de los brazos." },  
                { name: "Elevaciones laterales", sets: "3", reps: "12-15", description: "De pie con una mancuerna en cada mano, levanta los brazos hacia los lados hasta la altura de los hombros con los codos ligeramente doblados." },  
                { name: "Elevaciones frontales", sets: "3", reps: "12-15", description: "De pie con una mancuerna en cada mano, levanta los brazos hacia adelante alternadamente hasta la altura de los hombros." },  
                { name: "Crunch abdominal", sets: "3", reps: "15-20", description: "Acuéstate boca arriba con las rodillas dobladas, cruza los brazos sobre el pecho y levanta los hombros del suelo contrayendo los abdominales." },  
                { name: "Plancha", sets: "3", reps: "30-60 seg", description: "Apóyate sobre los antebrazos y las puntas de los pies, manteniendo el cuerpo en línea recta desde la cabeza hasta los talones." }  
            ]  
        },  
        sabado: {  
            title: "Sábado: Entrenamiento Completo",  
            exercises: [  
                { name: "Press de banca", sets: "3", reps: "10-12", description: "Acuéstate en el banco plano, agarra la barra con las manos un poco más separadas que el ancho de los hombros. Baja la barra hasta el pecho y empuja hacia arriba." },  
                { name: "Remo con barra", sets: "3", reps: "10-12", description: "Inclínate hacia adelante con la espalda recta, agarra la barra y tira hacia tu abdomen inferior manteniendo los codos cerca del cuerpo." },  
                { name: "Press militar", sets: "3", reps: "10-12", description: "Sentado o de pie, sostén una barra o mancuernas a la altura de los hombros. Empuja el peso hacia arriba hasta la extensión completa de los brazos." },  
                { name: "Sentadillas", sets: "3", reps: "10-12", description: "De pie con los pies separados al ancho de los hombros, baja flexionando las rodillas como si fueras a sentarte, mantén la espalda recta y luego vuelve a subir." },  
                { name: "Curl de bíceps", sets: "3", reps: "12-15", description: "De pie, sostén una barra con las palmas hacia arriba. Dobla los codos para levantar la barra hacia los hombros." }  
            ]  
        },  
        domingo: {  
            title: "Domingo: Descanso Completo",  
            exercises: []  
        }  
    },  
    
    // Ejercicios para pérdida de peso  
    "weight-loss": {  
        lunes: {  
            title: "Lunes: Cardio + Cuerpo Superior",  
            exercises: [  
                { name: "Cardio HIIT", sets: "1", reps: "20 min", description: "Intervalos de alta intensidad: 30 segundos de esfuerzo máximo seguidos de 90 segundos de recuperación activa. Repite durante 20 minutos." },  
                { name: "Flexiones", sets: "3", reps: "12-15", description: "Apóyate con las manos y los pies en el suelo, baja el cuerpo flexionando los codos y luego empuja hacia arriba." },  
                { name: "Remo con mancuerna", sets: "3", reps: "12-15", description: "Apoya una rodilla y una mano en un banco, con la otra mano sujeta una mancuerna. Tira de la mancuerna hacia arriba manteniendo el codo cerca del cuerpo." },  
                { name: "Press de hombros con mancuernas", sets: "3", reps: "12-15", description: "De pie o sentado, levanta mancuernas desde los hombros hasta la extensión completa de los brazos por encima de la cabeza." },  
                { name: "Tríceps en banco", sets: "3", reps: "15-20", description: "Siéntate en el borde de un banco, coloca las manos a los lados con los dedos hacia adelante. Baja el cuerpo flexionando los codos y vuelve a subir." }  
            ]  
        }, 
        martes: {  
            title: "Martes: Cardio + Piernas",  
            exercises: [  
                { name: "Cardio en escalera", sets: "1", reps: "20 min", description: "Incrementa gradualmente la intensidad durante 10 minutos, mantén el pico durante 5 minutos y reduce gradualmente durante 5 minutos." },  
                { name: "Sentadillas", sets: "4", reps: "15-20", description: "De pie con los pies separados al ancho de los hombros, baja flexionando las rodillas como si fueras a sentarte, mantén la espalda recta y luego vuelve a subir." },  
                { name: "Estocadas", sets: "3", reps: "12 por pierna", description: "Da un paso largo hacia adelante, baja la cadera hasta que ambas rodillas formen ángulos de 90 grados y luego vuelve a la posición inicial. Alterna las piernas." },  
                { name: "Elevación de cadera", sets: "3", reps: "15-20", description: "Túmbate boca arriba con las rodillas dobladas. Eleva la cadera apretando los glúteos y vuelve a bajar." },  
                { name: "Elevaciones de pantorrilla", sets: "3", reps: "20-25", description: "De pie con la parte delantera de los pies sobre un escalón o plataforma, levanta los talones lo más alto posible y luego baja controladamente." }  
            ]  
        },  
        miercoles: {  
            title: "Miércoles: Descanso Activo",  
            exercises: [  
                { name: "Yoga o estiramiento", sets: "1", reps: "30 min", description: "Realiza una sesión de yoga suave o estiramiento completo para mejorar la flexibilidad y recuperación muscular." },  
                { name: "Caminar", sets: "1", reps: "30 min", description: "Camina a un ritmo moderado para mantener la actividad sin sobrecargar los músculos." }  
            ]  
        },  
        jueves: {  
            title: "Jueves: Cardio + Core",  
            exercises: [  
                { name: "Cardio HIIT", sets: "1", reps: "20 min", description: "Intervalos de alta intensidad: 30 segundos de esfuerzo máximo seguidos de 90 segundos de recuperación activa. Repite durante 20 minutos." },  
                { name: "Plancha", sets: "3", reps: "30-60 seg", description: "Apóyate sobre los antebrazos y las puntas de los pies, manteniendo el cuerpo en línea recta desde la cabeza hasta los talones." },  
                { name: "Mountain climbers", sets: "3", reps: "20-30 por pierna", description: "En posición de flexión, lleva alternadamente las rodillas hacia el pecho en un movimiento rápido." },  
                { name: "Crunch abdominal", sets: "3", reps: "15-20", description: "Acuéstate boca arriba con las rodillas dobladas, cruza los brazos sobre el pecho y levanta los hombros del suelo contrayendo los abdominales." },  
                { name: "Russian twist", sets: "3", reps: "15-20 por lado", description: "Siéntate en el suelo con las rodillas dobladas y los pies ligeramente elevados. Gira el torso de lado a lado tocando el suelo a cada lado." }  
            ]  
        },  
        viernes: {  
            title: "Viernes: Cardio + Cuerpo Completo",  
            exercises: [  
                { name: "Cardio en escalera", sets: "1", reps: "20 min", description: "Incrementa gradualmente la intensidad durante 10 minutos, mantén el pico durante 5 minutos y reduce gradualmente durante 5 minutos." },  
                { name: "Burpees", sets: "3", reps: "10-15", description: "Desde posición de pie, baja a posición de sentadilla, extiende las piernas hacia atrás, haz una flexión, vuelve a posición de sentadilla y salta." },  
                { name: "Swing con kettlebell", sets: "3", reps: "15-20", description: "Con pies separados a la anchura de los hombros, sujeta una kettlebell con ambas manos. Balancea la kettlebell entre las piernas y luego hacia arriba hasta la altura del pecho." },  
                { name: "Remo con mancuerna", sets: "3", reps: "12-15", description: "Apoya una rodilla y una mano en un banco, con la otra mano sujeta una mancuerna. Tira de la mancuerna hacia arriba manteniendo el codo cerca del cuerpo." },  
                { name: "Press de hombros con mancuernas", sets: "3", reps: "12-15", description: "De pie o sentado, levanta mancuernas desde los hombros hasta la extensión completa de los brazos por encima de la cabeza." }  
            ]  
        },  
        sabado: {  
            title: "Sábado: Cardio Largo",  
            exercises: [  
                { name: "Cardio de estado estable", sets: "1", reps: "45-60 min", description: "Realiza cardio de intensidad moderada (65-75% de tu frecuencia cardíaca máxima) durante un período más largo: correr, ciclismo, elíptica o natación." }  
            ]  
        },  
        domingo: {  
            title: "Domingo: Descanso Completo",  
            exercises: []  
        }   
        // [Continúa con el resto de los días para pérdida de peso...]  
    },  
    
    // Ejercicios para mantenimiento  
    "maintenance": {  
        lunes: {  
            title: "Lunes: Cuerpo Superior",  
            exercises: [  
                { name: "Press de banca", sets: "3", reps: "10-12", description: "Acuéstate en el banco plano, agarra la barra con las manos un poco más separadas que el ancho de los hombros. Baja la barra hasta el pecho y empuja hacia arriba." },  
                { name: "Remo con barra", sets: "3", reps: "10-12", description: "Inclínate hacia adelante con la espalda recta, agarra la barra y tira hacia tu abdomen inferior manteniendo los codos cerca del cuerpo." },  
                { name: "Press militar", sets: "3", reps: "10-12", description: "Sentado o de pie, sostén una barra o mancuernas a la altura de los hombros. Empuja el peso hacia arriba hasta la extensión completa de los brazos." },  
                { name: "Fondos en paralelas", sets: "3", reps: "10-12", description: "Sujétate en las barras paralelas con los brazos extendidos, baja el cuerpo flexionando los codos y luego vuelve a subir." },  
                { name: "Curl de bíceps con barra", sets: "3", reps: "10-12", description: "De pie, sostén una barra con las palmas hacia arriba. Dobla los codos para levantar la barra hacia los hombros." }  
            ]  
        },  
        martes: {  
            title: "Martes: Cardio y Core",  
            exercises: [  
                { name: "Cardio intervalos", sets: "1", reps: "30 min", description: "Alterna 3 minutos de intensidad moderada con 1 minuto de alta intensidad durante 30 minutos." },  
                { name: "Plancha", sets: "3", reps: "30-60 seg", description: "Apóyate sobre los antebrazos y las puntas de los pies, manteniendo el cuerpo en línea recta desde la cabeza hasta los talones." },  
                { name: "Crunch abdominal", sets: "3", reps: "15-20", description: "Acuéstate boca arriba con las rodillas dobladas, cruza los brazos sobre el pecho y levanta los hombros del suelo contrayendo los abdominales." },  
                { name: "Superman", sets: "3", reps: "12-15", description: "Túmbate boca abajo, extiende los brazos hacia adelante y eleva simultáneamente brazos y piernas, manteniendo la posición 2 segundos." }  
            ]  
        },  
        miercoles: {  
            title: "Miércoles: Piernas",  
            exercises: [  
                { name: "Sentadillas", sets: "3", reps: "12-15", description: "De pie con los pies separados al ancho de los hombros, baja flexionando las rodillas como si fueras a sentarte, mantén la espalda recta y luego vuelve a subir." },  
                { name: "Estocadas", sets: "3", reps: "10 por pierna", description: "Da un paso largo hacia adelante, baja la cadera hasta que ambas rodillas formen ángulos de 90 grados y luego vuelve a la posición inicial. Alterna las piernas." },  
                { name: "Peso muerto rumano", sets: "3", reps: "10-12", description: "De pie con pies a la anchura de la cadera, sostén una barra o mancuernas. Inclina el torso hacia adelante con la espalda recta y vuelve a la posición inicial." },  
                { name: "Elevaciones de pantorrilla", sets: "3", reps: "15-20", description: "De pie con la parte delantera de los pies sobre un escalón o plataforma, levanta los talones lo más alto posible y luego baja controladamente." }  
            ]  
        },  
        jueves: {  
            title: "Jueves: Descanso Activo",  
            exercises: [  
                { name: "Yoga o estiramiento", sets: "1", reps: "30 min", description: "Realiza una sesión de yoga suave o estiramiento completo para mejorar la flexibilidad y recuperación muscular." },  
                { name: "Caminar", sets: "1", reps: "30 min", description: "Camina a un ritmo moderado para mantener la actividad sin sobrecargar los músculos." }  
            ]  
        },  
        viernes: {  
            title: "Viernes: Cuerpo Superior",  
            exercises: [  
                { name: "Dominadas", sets: "3", reps: "8-10", description: "Agárrate a la barra con las palmas hacia adelante, tira de tu cuerpo hacia arriba hasta que la barbilla supere la barra." },  
                { name: "Press de banca inclinado", sets: "3", reps: "10-12", description: "Similar al press de banca plano pero en un banco inclinado a 30-45 grados para trabajar la parte superior del pecho." },  
                { name: "Remo con mancuerna", sets: "3", reps: "10-12", description: "Apoya una rodilla y una mano en un banco, con la otra mano sujeta una mancuerna. Tira de la mancuerna hacia arriba manteniendo el codo cerca del cuerpo." },  
                { name: "Elevaciones laterales", sets: "3", reps: "12-15", description: "De pie con una mancuerna en cada mano, levanta los brazos hacia los lados hasta la altura de los hombros con los codos ligeramente doblados." },  
                { name: "Extensiones de tríceps", sets: "3", reps: "12-15", description: "De pie o sentado, sostén una mancuerna con ambas manos sobre la cabeza. Baja la mancuerna detrás de la cabeza flexionando los codos y vuelve a subir." }  
            ]  
        },  
        sabado: {  
            title: "Sábado: Cardio y Core",  
            exercises: [  
                { name: "Cardio continuo", sets: "1", reps: "30-40 min", description: "Realiza cardio de intensidad moderada y constante: correr, ciclismo, elíptica o natación." },  
                { name: "Mountain climbers", sets: "3", reps: "20-30 por pierna", description: "En posición de flexión, lleva alternadamente las rodillas hacia el pecho en un movimiento rápido." },  
                { name: "Russian twist", sets: "3", reps: "15-20 por lado", description: "Siéntate en el suelo con las rodillas dobladas y los pies ligeramente elevados. Gira el torso de lado a lado tocando el suelo a cada lado." },  
                { name: "Elevación de piernas", sets: "3", reps: "12-15", description: "Túmbate boca arriba con las piernas extendidas. Levanta las piernas hasta formar un ángulo de 90 grados con el suelo y baja controladamente." }  
            ]  
        },  
        domingo: {  
            title: "Domingo: Descanso Completo",  
            exercises: []  
        }  
         
    }  
}; 

// Funciones de gestión de rutinas  
function getRutina(tipo, dia) {  
    return exerciseDatabase[tipo]?.[dia] || null;  
}  

function agregarEjercicio(tipo, dia, ejercicio) {  
    if (exerciseDatabase[tipo]?.[dia]) {  
        exerciseDatabase[tipo][dia].exercises.push(ejercicio);  
        return true;  
    }  
    return false;  
}  

function editarEjercicio(tipo, dia, index, ejercicio) {  
    if (exerciseDatabase[tipo]?.[dia]?.exercises[index]) {  
        exerciseDatabase[tipo][dia].exercises[index] = ejercicio;  
        return true;  
    }  
    return false;  
}  

function eliminarEjercicio(tipo, dia, index) {  
    if (exerciseDatabase[tipo]?.[dia]?.exercises[index]) {  
        exerciseDatabase[tipo][dia].exercises.splice(index, 1);  
        return true;  
    }  
    return false;  
}  

// Exportar las funciones y la base de datos  
if (typeof module !== 'undefined' && module.exports) {  
    module.exports = {  
        exerciseDatabase,  
        getRutina,  
        agregarEjercicio,  
        editarEjercicio,  
        eliminarEjercicio  
    };  
} else {  
    window.exerciseDatabase = exerciseDatabase;  
    window.getRutina = getRutina;  
    window.agregarEjercicio = agregarEjercicio;  
    window.editarEjercicio = editarEjercicio;  
    window.eliminarEjercicio = eliminarEjercicio;  
}  