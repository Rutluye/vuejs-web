import IProductos from "@/interfaces/Productos/IProductos";

export default interface ICategory {
    categoria_descripcion : string;
    categoria_image       : string;
    categoria_nombre      : string;
    productos             : IProductos[]

}