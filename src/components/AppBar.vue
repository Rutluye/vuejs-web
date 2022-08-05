<template>
  <div>
    <v-app-bar
        color="red darken-2 mb-4"
        height="34"
        dense
    >

      <img alt="BannerGif"
           style="max-height: 40px; min-width: 100%;max-width: 100vw;"
           src="https://minisope.vtexassets.com/arquivos/CINTILLODESKTOPMinisoPeru.gif"
      />
    </v-app-bar>
    <div class="d-flex">
      <router-link to="/">
        <v-img
            max-width="120"
            height="40"
            alt="Logo"
            class="mr-3 ml-2"
            src="https://minisope.vtexassets.com/assets/vtex.file-manager-graphql/images/10f39e67-475c-4ca1-b70d-514d1ff6f2ae___ef69a328b8f540713705bb41b96cb81a.png"
        />
      </router-link>
      <v-autocomplete
          solo
          v-model="inputModel"
          :items="searchProduct"
          :search-input.sync="selectAuto"
          cache-items
          hide-no-data
          hide-details
      >
      <v-text-field
          solo
          append-icon="mdi-card-search-outline"
          label="¿Qué estás buscando hoy?"

      />
      </v-autocomplete>

      <v-spacer></v-spacer>
      <v-btn
          icon
          color="black"
      >
        <v-icon>mdi-penguin</v-icon>
      </v-btn>
      <v-btn
          icon
          color="black"
      >
        <v-icon>mdi-heart-outline</v-icon>
      </v-btn>
      <v-btn
          icon
          color="black"
      >
        <v-icon>mdi-shopping-outline</v-icon>
      </v-btn>
    </div>

    <!--v-card cabecera-->
    <v-card>
      <v-menu
          offset-y
      >
        <template v-slot:activator="{ attrs, on }">
          <v-tabs
              background-color="white"
              align-with-title
              class="hidden-sm-and-down"

          >
            <v-tabs-slider
                color="red"
            ></v-tabs-slider>
            <v-tab
                v-bind="attrs"
                v-on="on"
                color="black"
                style="text-transform:capitalize !important; color: black">

              <router-link to="/categoria_producto/1">Categorías</router-link>

            </v-tab>

            <v-tab
                v-for="(categoria,i) in categorias"
                :key="i"
                :style="'text-transform:capitalize !important; color:' + categoria.color"
                :color="categoria.color"
            >
              {{ categoria.cat }}
            </v-tab>
          </v-tabs>
        </template>
        <v-list>
          <v-list-item v-for="item in items" :key="item">
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-card>

  </div>
</template>

<script lang="ts">
import {defineComponent, ref, Ref, watch} from "@vue/composition-api";
import CategoryModel from "@/models/CategoryModel/CategoryModel";
import {productsServices} from "@/Services/Productos/ProductsService";
import ProductModel from "@/models/Productos/ProductModel";


export default defineComponent({
  name: "AppBar.vue",
  loading: false,
  select: null,
  items: [],
  search: null,


  setup(_,context) {

    const list: boolean = false;

    const categorias = [
      {
        'color': 'red',
        'cat': 'New Arrivals ✨'
      },
      {
        'color': 'black',
        'cat': 'Miniso Wow ✨'
      },
      {
        'color': '#ff0000',
        'cat': 'Outlet 🔥'
      },
      {
        'color': '#52e8f6',
        'cat': 'Colecciones'
      },
      {
        'color': 'black',
        'cat': 'Tiendas'
      },
      {
        'color': 'black',
        'cat': 'Contáctenos'
      }
    ]

    const btns =    ['Removed', '0']

    const colors = ['deep-purple accent-4']

    const items = ['Hogar', 'Salud y Belleza', 'Juguetería', 'Tecnología']

    const route = context.root.$route;

    const responseproductsCat : Ref<ProductModel|null> = ref(null);

    const responseCategory : Ref<CategoryModel|null> = ref(null);

    const searchProduct : Ref<ProductModel|any> = ref([]);
    const selectAuto : Ref<any> = ref('')
    const inputModel : Ref<any> =ref(null)

    watch(selectAuto, async() =>{
      const response = await productsServices.searchProducts(selectAuto.value)

      searchProduct.value = response.map( (producto : any) =>{ return producto.producto_nombre})
    })


    const getProductsByCategory = async () => {

      const response = await productsServices.getProductsByCategory(route.params.categoria);

      responseCategory.value = new CategoryModel(response[0])
    }


      return {
        list,
        getProductsByCategory,
        responseproductsCat,
        responseCategory,
        searchProduct,
        selectAuto,
        inputModel,
        categorias, colors, btns,items,
        model: 'tab-2',
        text: 'Hogar',

      }
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