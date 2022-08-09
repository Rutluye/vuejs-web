import ProductCard from "./ProductCard.vue"
import { text, number, boolean } from "@storybook/addon-knobs/dist";
import {onMounted} from "@vue/composition-api";

export default {
    title: "ProductTest",
};

export const TestStories: any = () => ({
    props: {
        loading: {
            default: boolean("Cargando", false)
        },

        selection:{
            default: number('Selection', 1)

        },
        cardTitle:{
            default: text('Selecciona un titulo', '')
        },
        cardDescription:{
            default: text('Selecciona una descripcion', '')
        },

    },
    components: {
        ProductCard,
    },
    template: `<ProductCard :loading="loading" :selection="selection" :card-title="cardTitle" :card-description="cardDescription" :reserve="reserve"></ProductCard>`,
    setup(props : any) {
        onMounted(() => {
            console.log("ONMOUNTED!!!!!!")
        });

        const reserve = () =>{
            props.loading = true;

            setTimeout(() => (props.loading = false), 2000)
        }

        return {
            reserve
        }
    }
})