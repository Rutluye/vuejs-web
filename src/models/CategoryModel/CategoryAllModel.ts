import ProductModel from "@/models/Productos/ProductModel";
import CategoryModel from "@/models/CategoryModel/CategoryModel";


export default class CategoryAllModel {

    //@ts-ignore
    private categoryArray: CategoryModel[]

    constructor(data: CategoryModel[]) {
        this.categoryArray = []
        //@ts-ignore
        data.forEach(categoria => this.categoryArray.push(new CategoryModel(categoria)))

    }

    public getCategoryArray(): CategoryModel[] {
        return this.categoryArray;
    }

}