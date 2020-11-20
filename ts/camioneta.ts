import Vehiculo from "./vehiculo";

export default class Camioneta extends Vehiculo {

    //Atributos
    public cuatroXcuatro: boolean;

    //Constructor
    constructor(id:number, marca:string, modelo:string, precio:number, cuatroXcuatro:boolean){
        super(id,marca,modelo, precio);
        this.cuatroXcuatro=cuatroXcuatro;
    }
}