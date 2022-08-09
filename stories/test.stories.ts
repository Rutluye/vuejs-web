import Test from "./Test.vue"
import { color, text, number } from "@storybook/addon-knobs/dist";
import {onMounted} from "@vue/composition-api";

export default {
    title: "Test",
};

export const TestStories: any = () => ({
    props: {
        text: {
            default: text("Enter a text", "Hello")
        },
        color: {
            default: color("Pick a color", "")
        },
        height:{
            default: number('Selecciona la altura', 100)
        }
    },
    components: {
        Test,
    },
    template: `<test :text="text" :color="color" :height="height" @click="onClick"></test>`,
    setup() {
        onMounted(() => {
            console.log("ONMOUNTED!!!!!!")
        });

        function onClick() {
            console.log("onClick");
        }

        return {
            onClick
        }
    }
})