export class Experiencia{
    id?: number;
    empresa: string;
    puesto: string;
    fecha_desde: any;
    fecha_hasta: any;
    descripcion: string;

    constructor(id:number, empresa: string, puesto: string, fecha_desde: any, fecha_hasta: any, descripcion: string){
        this.id=id;
        this.empresa = empresa;
        this.puesto = puesto;
        this.fecha_desde = fecha_desde;
        this.fecha_hasta = fecha_hasta;
        this.descripcion = descripcion;
    }
}