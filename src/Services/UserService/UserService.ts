import axios from "axios";
import {API_PREFIX_MAIN} from "@/constants";


export class UserService{

    public async registerUser(form : any) {

        const {data} = await axios.post(`${API_PREFIX_MAIN}/newuser`, form)
        return data;
    }

}

export const userService = new UserService()