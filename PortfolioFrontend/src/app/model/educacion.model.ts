export class Educacion{
    id?: number;
    establecimiento: string;
    fecha_desde: any;
    fecha_hasta: any;
    imagen: string;
    titulo: string;

    constructor(establecimiento: string, fecha_desde: any, fecha_hasta: any, imagen: string, titulo: string){
        this.establecimiento = establecimiento;
        this.fecha_desde = fecha_desde;
        this.fecha_hasta = fecha_hasta;
        this.imagen = imagen;
        this.titulo = titulo;
    }
}