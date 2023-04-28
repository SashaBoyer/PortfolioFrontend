export class Educacion{
    id?: number;
    establecimiento: string;
    fechaDesde: string;
    fechaHasta: string;
    imagen: string;
    titulo: string;

    constructor(establecimiento: string, fechaDesde: string, fechaHasta: string, imagen: string, titulo: string){
        this.establecimiento = establecimiento;
        this.fechaDesde = fechaDesde;
        this.fechaHasta = fechaHasta;
        this.imagen = imagen;
        this.titulo = titulo;
    }
}