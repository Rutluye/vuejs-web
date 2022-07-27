import IDetails from "@/interfaces/IDetails/IDetails";
import DetailsItemModel from "@/models/DetailsModel/DetailsItemModel";


export default class DetailsModel{

    private productArray : DetailsItemModel[]

    constructor(data : IDetails[]) {
        this.productArray = []

        data.forEach(producto => this.productArray.push(new DetailsItemModel(producto)))

    }

    public getProductArray():DetailsItemModel[] {
        return this.productArray;
    }

}