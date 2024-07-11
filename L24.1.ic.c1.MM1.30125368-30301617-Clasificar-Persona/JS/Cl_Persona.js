export default class Cl_Persona{
    constructor(añoActual, añoNacimiento){
        this.añoActual = añoActual;
        this.añoNacimiento = añoNacimiento;
    }

   get añoActual(){
        return this._añoActual;
   }

   set añoActual(e){
        this._añoActual = +e;
   }

   get añoNacimiento() {
        return this._añoNacimiento;
   }

   set añoNacimiento(e) {
        this._añoNacimiento = +e;
   }

    Calc_Edad(){
        return (this.añoActual - this.añoNacimiento)
    }

    Calc_GrupoEdad(){200
        switch(true){
            case this.Calc_Edad() >= 60:
               return "Persona Mayor";
               break;
            case this.Calc_Edad() >= 40:
                return "Adulto Medio";
                break;
            case this.Calc_Edad() >= 20:
                return "Adulto Joven";
                break;
            case this.Calc_Edad() >= 13:
                return "Adolescente"
                break;
            case this.Calc_Edad() >= 0:
                return "Niño"
                break;
            default:
                return "Nada"
        }
    }
}