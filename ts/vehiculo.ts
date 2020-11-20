export default class Vehiculo {

    //Atibutos
    public id:number;
    public marca:string;
    public modelo:string;
    public precio:number;

    //Constructor
    constructor(id:number, marca:string, modelo:string, precio:number){
        this.id=id;
        this.marca=marca;
        this.modelo=modelo;
        this.precio=precio;
    }
}