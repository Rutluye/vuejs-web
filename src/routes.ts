import Vue 					        from 'vue';
import VueRouter, {RouteConfig}     from 'vue-router';
import { WebPages }                 from "./constants";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        path: '*',
        redirect: '/'

    },
    {
        path: '/',
        name: WebPages.HOME,
        components:{
            default: () => import("@/view/homeView.vue")
        }

    },

    {
        path: '/detalle_producto/:producto_id',
        name: WebPages.PRODUCTDETAIL,
        components: {
            default: () => import("@/view/ProductosCard.vue")
        }
    },

    {
        path: '/categoria_producto/:categoria',
        name: WebPages.PRODUCTGENE,
        components: {
            default: () => import("@/view/ProductosGeneral.vue")
        }
    }


];

/**
 *
 */
const router = new VueRouter({
    routes,
    mode: 'history'
} as any);


export default router;