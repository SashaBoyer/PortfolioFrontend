export class Educacion{
    id?: number;
    establecimiento: string;
    fechaDesde: any;
    fechaHasta: any;
    imagen: string;
    titulo: string;

    constructor(establecimiento: string, fechaDesde: any, fechaHasta: any, imagen: string, titulo: string){
        this.establecimiento = establecimiento;
        this.fechaDesde = fechaDesde;
        this.fechaHasta = fechaHasta;
        this.imagen = imagen;
        this.titulo = titulo;
    }
}