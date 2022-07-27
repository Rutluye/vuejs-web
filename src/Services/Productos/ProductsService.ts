import axios from 'axios';
import {API_PREFIX_MAIN} from "@/constants";

export class ProductsServices{

    public async getProducts() {

        const { data } = await axios.get(`${API_PREFIX_MAIN}/productos`)
        return data;

    }

    public async getProductsByCategory(id_categoria : string | number) {

        const { data } = await axios.get(`${API_PREFIX_MAIN}/productos_categoria/${id_categoria}`)
        return data;
    }


}

export const productsServices = new ProductsServices()