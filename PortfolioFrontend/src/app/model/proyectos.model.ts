export class Proyectos{
    id?: number;
    nombre: string;
    descripcion: string;
    fecha_realizacion: Date;
    img: string;
    
    

    constructor(nombre: string, descripcion: string, fecha_realizacion: Date, img: string){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fecha_realizacion = fecha_realizacion;
        this.img = img;

    }
}