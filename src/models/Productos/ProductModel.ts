import IProductos from "@/interfaces/Productos/IProductos";
import ProductsItemModel from "@/models/Productos/ProductsItemModel";


export default class ProductModel{

    private productArray : ProductsItemModel[]

    constructor(data : IProductos[]) {
        this.productArray = []

        data.forEach(producto => this.productArray.push(new ProductsItemModel(producto)) )

    }

    public getProductArray():ProductsItemModel[] {
        return this.productArray;
    }



}