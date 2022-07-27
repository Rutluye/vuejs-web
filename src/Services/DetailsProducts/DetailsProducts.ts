import axios from 'axios';
import {API_PREFIX_MAIN} from "@/constants";

export class DetailsProducts{

    public async getProducts(id_producto : string) {

        const { data } = await axios.get(`${API_PREFIX_MAIN}/detalle_producto/${id_producto}`)
        return data;
    }

}

export const productsDetails = new DetailsProducts()