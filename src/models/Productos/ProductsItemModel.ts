import IProductos from "@/interfaces/Productos/IProductos";

export default class ProductsItemModel {

    private producto_descripcion: string;
    private producto_id: number;
    private producto_img: string;
    private producto_nombre: string;
    private producto_precio: number;
    private producto_descuento: number;
    private precio_final: number;
    private producto_categoria: number;


    constructor(data: IProductos) {
        this.producto_descripcion = data.producto_descripcion
        this.producto_id = data.producto_id
        this.producto_img = data.producto_img
        this.producto_nombre = data.producto_nombre
        this.producto_precio = data.producto_precio
        this.producto_descuento = data.producto_descuento
        this.precio_final = data.precio_final
        this.producto_categoria =  data.producto_categoria
    }



    public getProducDescripcion() : string {
        return this.producto_descripcion
    }


    public getProductId() : number {
        return this.producto_id
    }

    public getProductImage() : string {
        return this.producto_img
    }

    public getProductNombre() : string {
        return this.producto_nombre
    }

    public getProductPrecio() : number {
        return this.producto_precio
    }

    public getCategoria() : number {
        return this.producto_categoria
    }

}