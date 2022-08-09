import IProductos from "@/interfaces/Productos/IProductos";
import ICategory from "@/interfaces/ICategory/ICategory";
import ProductModel from "@/models/Productos/ProductModel";


export default class CategoryModel extends ProductModel {

    readonly categoria_descripcion   : string;
    readonly categoria_image         : string;
    readonly categoria_nombre        : string;

    constructor(data : ICategory ) {
        super(data.productos)
        this.categoria_descripcion = data.categoria_descripcion
        this.categoria_image       = data.categoria_image
        this.categoria_nombre      = data.categoria_nombre

    }

    public getCategoryDescripcion() : string{
        return this.categoria_descripcion
    }
    public getCategoryImage() : string{
        return this.categoria_image
    }
    public getCategoryNombre() : string{
        return this.categoria_nombre
    }

}