/*
Desarrolla un programa que solicite año actual y año de nacimiento de una persona y categorice a la persona en un
grupo de edad de la forma siguiente:
Edad Grupo
0-12: Niño
13-19: Adolescente
20-39: Adulto Joven
40-59: Adulto Medio
60+: Persona Mayor
Muestre la edad de la persona y su grupo de edad
Datos de Prueba
Año actual: 2024
Año de nacimiento: 2000
Salida
Edad: 24
Grupo de edad a la que pertenece: Adulto Joven
*/

import Cl_Persona from "./Cl_Persona.js";
import Cl_IPersona from "./Cl_IPersona.js";

let iPer = new Cl_IPersona();
let añoActual = iPer.leerAñoActual();
let añoNacimiento = iPer.leerAñoNacimiento();

let persona = new Cl_Persona(añoActual, añoNacimiento);


let salida = document.getElementById("Salida");
salida.innerHTML = iPer.reportePersona(persona.Calc_Edad(), persona.Calc_GrupoEdad())