export class TransferenciasModel{
    id:number;
    rut:string;
    nombre:string;
    email:string;
    monto:number;

    constructor(){
        this.id=1;
        this.rut="";
        this.nombre="";
        this.email="";
        this.monto=0;
    }
}