function e1() {

    let notas = [];
    let nota;
    let suma = 0;
    let alta = null;
    let baja = null;
    let aprobados = 0;
    let desaprobados = 0;

    for (let i = 0; i < 10; i++) {

        nota = parseInt(prompt("Ingrese nota" + i + ":"));

        while (isNaN(nota)) {

            nota = parseInt(propt("Error: Valor incorrecto, volver a ingresar:"));

        }

        numeros.push(num);

        suma += nota;

        if (i === 0) {

            alta = nota;
            baja = nota;

        }

        if (nota > alta) {

            alta = nota;

        }

        if (nota < baja) {

            baja = nota;

        }

        if (nota > 10) {

            nota = parseInt(propt("Error: La nota superó el límite, volver a ingresar:"));

        }

        if (nota >= 6 && nota <= 10) {

            aprobados++;

        } else {
            desaprobados++

        }

    }

    let promedio = suma / 10;

    console.log(numeros);
    console.log("Promedio de notas: ", promedio);
    console.log("Nota más alta: ", alta);
    console.log("Nota más baja: ", baja);
    console.log("Cant. aprobados: ", aprobados);
    console.log("Cant. desaprobados: ", desaprobados);

    return "Función ejecutada."
}

function e2() {

    let numeros = [];
    let num;
    let pares = [];
    let impares = [];
    let negativos = 0;
    let positivos = 0;
    let suma = 0;
    let mayor = null;

    for (let i = 0; i < 15; i++) {

        num = parseFloat(prompt("Ingrese número" + i + ":"));

        while (isNaN(num)) {

            num = parseFloat(propt("Error: Valor incorrecto, volver a ingresar:"));

        }

        numeros.push(num);

        suma += num;

        if (num % 2 === 0) {

            pares.push(num);

        } else if (num % 3 === 0) {

            impares.push(num);

        }

        if (num > 0) {

            positivos++;

        } else {

            negativos++;

        }

        if (i === 0) {

            mayor = num;

        }

        if (num > mayor) {

            mayor = num;

        }
    }

    console.log("Pares: ", pares);
    console.log("Impares: ", impares);
    console.log("Cant. positivos: ", positivos);
    console.log("Cant. negativos: ", negativos);
    console.log("Suma total de todo: ", suma);
    console.log("Mayor número ingresado: ", mayor);

    return "Función ejecutada."
}

function e3() {

    let nombres = [];
    let letras = [];
    let nombre;
    let nombre1;

    for (let i = 0; i < 8; i++) {

        nombre = prompt("Ingrese nombre Nro" + i + ":");

        nombres.push(nombre);

        letras.push(nombre.length);

    }

    nombre1 = prompt("¿Qué nombre quiere buscar?");

    console.log("Nombre introducido: ", nombre1);

    console.log("¿Está dicho nombre?:", nombres.includes(nombre1));

    console.log("Posición del nombre buscado: ", nombres.indexOf(nombre1));

    console.log("Cant. de letras de cada nombre: ", letras);

    return "Función ejecutada."
}

function e4() {

    let productos = [];
    let producto;
    let producto1;

    for (let i = 0; i < 5; i++) {

        producto = prompt("Ingrese producto Nro" + i + ":");

        productos.push(producto);

    }

    productos.pop();

    producto1 = prompt("Ingrese un nuevo producto:");

    productos.push(producto1);

    productos.sort();

    console.log(productos);

    return "Función ejecutada."
}

function e5() {

    let edades = [];
    let edad;
    let cantidad = 0;
    let suma = 0;
    let mayor = null;
    let menor = null;
    let mayores = 0;

    edad = parseInt(prompt("Ingrese edades:"));

    while (isNaN(edad)) {

        edad = parseInt(prompt("Dato solicitado incorrecto: volver a cargar la edad (0 para terminar):"));

    }

    while (edad !== 0) {

        while (isNaN(edad)) {

            edad = parseInt(prompt("Error: volver a cargar una edad (0 para terminar):"));

        }

        edades.push(edad);

        suma += edad;

        if (cantidad === 0) {

            mayor = edad;
            menor = edad;

        }

        if (edad > mayor) {

            mayor = edad;

        }

        if (edad < menor) {

            menor = edad;

        }

        if (edad >= 18) {

            mayores++;

        }

        edad = parseInt(prompt("Ingrese edades (0 para terminar):"));

        cantidad++;
    }

    let promedio = suma / cantidad;

    console.log("Cantidad total de personas: ", cantidad);
    console.log("Promedio de edades: ", promedio);
    console.log("Mayor edad: ", mayor);
    console.log("Menor edad: ", menor);
    console.log("Cant. mayores de edad: ", cantidad);

    return "Función ejecutada."
}

function e6() {

    console.log("Falta Hacer (Muy difícil dx)");

    return "Función ejecutada."
}

function e7() {

    let numeros = [];
    let num;
    let num1;

    num = parseInt(prompt("¿Cuántos números ingresará?"));

    while (isNaN(num)) {

        num = parseInt(prompt("Error: carge nuevamente el número:"));

    }

    for (let i = 0; i < num; i++) {


        num = parseInt(prompt("Ingrese el número" + i + ":"));

        while (isNaN(num)) {

            num = parseInt(prompt("Error: carge nuevamente un número:"));

        }
    }

    num1 = parseInt(prompt("Escribe un número:"));

    if (numeros.includes(num1)) {

        numeros.pop();

    } else {

        numeros.push(num1);

    }

    console.log("Array actualizado: ", numeros);

    return "Función ejecutada."
}

function e8() {

    let alumnos = [];
    let alumno;
    let nombre;
    let eliminar;
    let cantidad = 0;

    while (alumno !== "salir") {

        alumno = prompt("Ingrese alumno:");

        alumnos.push(alumno);

        contador++;

    }

    nombre = alert(prompt("¿Qué alumno quiere buscar?"));

    console.log("Alumno introducido: ", nombre);

    console.log("¿Está dicho alumno?:", alumnos.includes(nombre));

    eliminar = alert(prompt("¿Qué alumno quiere eliminar?"));

    console.log("Alumno eliminado: ", eliminar);

    alumnos.slice(eliminar);

    console.log("Cantidad de alumnos: ", cantidad);

    return "Función ejecutada."
}

function ejercicio8() {

    let alumnos = [];
    let agregar;
    let menu;
    let buscar;
    let eliminar;
    let cantidad = 0;

    menu = parseInt(prompt("Eliga una opción:\n1- Agregar alumno\n2- Mostrar alumnos\n3- Buscar alumno\n4- Eliminar alumno\n5- Mostrar cantidad de alumno\n6- Salir"));

    while (isNaN(menu)) {

        menu = parseInt(prompt("Opción mal ingresada, volver a ingresar:"));

    }

    if (menu === 1) {

        agregar = prompt("Ingrese el nombre del alumno:")

        alumnos.push(agregar);

        return;

    }

    if (menu === 2) {

        console.log("Lista de alumnos: ", alumnos);

    }

    if (menu === 3) {

        buscar = prompt("Ingrese el nombre a buscar:");

        console.log("Nombre buscado: ", buscar);

        console.log("¿Está en la lista?: ", alumnos.includes(buscar));

    }

    if (menu === 4) {

        eliminar = prompt("Escriba el alumno a eliminar:");

        console.log("Alumno a eliminar: ", eliminar);

        alumnos.slice(eliminar);

    }

    if (menu === 5) {

        console.log(alumnos.length);

    }

    if (menu === 6) {

        break;

    }

    return "Función ejecutada."
}

function extra() {

    let random = [];
    let ordenado = [];
    let invertido = [];
    let num;
    let pares = 0;
    let impares = 0;

    for (let i = 0; i < 8; i++) {

        num = Math.floor(Math.random() * 100) + 1

        random.push(num);

        suma += num;

    }

    if (num % 2 === 0) {

        pares++;

    } else {

        if (num % 3 === 0) {

            impares++;

        }
    }

    let promedio = suma / 8;

    console.log("Promedio: ", promedio);

    console.log("Array ordenado: ", random.sort());

    console.log("Array invertido: ", random.reverse());

    buscar = prompt("Ingrese el número a buscar:");

    console.log("Número buscado: ", buscar);

    console.log("¿Está en el array?: ", alumnos.includes(buscar));

    return "Función ejecutada."
}