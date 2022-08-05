import IProductos from "@/interfaces/Productos/IProductos";
import ICategory from "@/interfaces/ICategory/ICategory";
import ProductModel from "@/models/Productos/ProductModel";


export default class CategoryModel extends ProductModel {

    private categoria_descripcion   : string;
    private categoria_image         : string;
    private categoria_nombre        : string;

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