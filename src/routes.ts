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
    },
    {
        path: '/search/:nom_pro',
        name: WebPages.PRODUCTSEARCH,
        components: {
            default: () => import("@/view/SearchGeneral.vue")
        }
    },

    {
        path: '/new/',
        name: WebPages.NEWPRODUCTOS,
        components: {
            default: () => import("@/view/NewProductos.vue")
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