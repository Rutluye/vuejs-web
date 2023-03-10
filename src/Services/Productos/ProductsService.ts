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
    public async getAllProductsByCategory() {

        const { data } = await axios.get(`${API_PREFIX_MAIN}/productos_categorias/`)
        return data;
    }

    public async searchProducts(nompro : string){
        const { data } = await axios.get(`${API_PREFIX_MAIN}/search/productos/${nompro}`)
        return data;
    }


    public async getProductsByNew(){
       const { data } = await axios.get(`${API_PREFIX_MAIN}/nuevos_productos/`)
       return data;
    }
}


export const productsServices = new ProductsServices()