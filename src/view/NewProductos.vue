<template>
    <div v-if="!responseNew">Loading...</div>
    <div v-else>
      <v-row>
        <v-col
            cols="2"
            class="hidden-sm-and-down"
        >
          <filtro-card/>
        </v-col>
        <v-col cols="10">
          <product-card :response-category="responseNew"/>
        </v-col>
      </v-row>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/composition-api";
import {onMounted, ref, Ref} from "@vue/composition-api/dist/vue-composition-api";
import {productsServices} from "@/Services/Productos/ProductsService";
import ProductModel from "@/models/Productos/ProductModel";
import ProductCard from "@/components/cards/ProductCard.vue";
import FiltroCard from "@/components/cards/FiltroCard.vue";


export default defineComponent({
  name: 'NewProductos',
  components:{
    ProductCard,
    FiltroCard

  },
  setup(_, context) {
    const modal = null


    const items= ref([
      {
        items: [
          { title: 'Cocina' },
          { title: 'Organizadores' },
          { title: 'Mascotas' },
          { title: 'Termos y Tomatodos' },
          { title: 'Articulos de Meza' },
          { title: 'Baño' },
        ],
        title: 'Categoría',
      },
      {
        items: [
          { title: 'Verde Menta' },
          { title: 'Verde' },
          { title: 'Negro' },
          { title: 'Transparente' },
          { title: 'Gris' },
          { title: 'Blanco' },
        ],
        title: 'Color',
      },
      {
        items: [
          { title: 'We Bare Bears' },
          { title: 'Candy Series' },
          { title: 'Energy Of Fruits' },
          { title: 'Miniso' },
          { title: 'Series' },
        ],
        title: 'Lincencia',
      },
      {
        items: [
          { title: 'Utensilios De Cocina' },
          { title: 'Cubiertos' },
          { title: 'Gancho Para Ropa' },
          { title: 'Taza' },
          { title: 'Sarten' },
          { title: 'Tapete Decorativo' },
        ],
        title: 'Sub-Categoría',
      },
    ])

    const itemData : Ref<any> = ref([
      {
        text: 'Home',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        text: 'Hogar',
        disabled: false,
        href: 'breadcrumbs_link_1',
      }
    ])

    const route = context.root.$route;

    const responseNew : Ref<ProductModel|null> = ref(null);

    const getProductsByCategory = async () =>{

    const response = await productsServices.getProductsByNew();

    console.log (response)

      responseNew.value = new ProductModel(response)

    }

    onMounted( () => {
      getProductsByCategory();
    })


    return {
      items,
      itemData,
      modal,
      getProductsByCategory,
      responseNew
    }

    //...

  }
})
</script>
<style scoped>
.button_offer{
  padding:0 !important;
  margin:0 !important;
}
.v-slide-group__content{
  display:flex !important;
  gap: 15px !important;
}
</style>