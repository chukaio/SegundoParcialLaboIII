import Vehiculo from "./vehiculo";

export default class Auto extends Vehiculo {

    //Atributos
    public cantidadPuertas: number;

    //Constructor
    constructor(id:number, marca:string, modelo:string, precio:number, cantidadPuertas:number){
        super(id,marca,modelo, precio);
        this.cantidadPuertas=cantidadPuertas;
    }
}