export default class Cl_IPersona{
    leerAñoActual(){
        return prompt("Ingrese el Año Actual");
    }

    leerAñoNacimiento(){
        return prompt("Ingrese el Año de Nacimiento");
    }

    reportePersona(edad, grupoEdad){
        return `
        Edad: ${edad}
        <br>
        Grupo de Edad al que Pertenece: ${grupoEdad}        
        `
    }
}