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
      <v-text-field
          solo
          v-model="inputModel"
          :items="searchProduct"
          cache-items
          hide-no-data
          hide-details
          @keyup.enter="buscarProductos"
      >
        <v-text-field
            solo
            append-icon="mdi-card-search-outline"
            label="¿Qué estás buscando hoy?"

        />
      </v-text-field>

      <v-spacer></v-spacer>

      <v-select
          style="max-width:80px"
          dense
          outlined
          width="100px"
          item-text="id"
          v-model="e1"
          :items="idiomas"
          @change="selectLanguage($event)"
      >
        <template v-slot:selection="{item}">
          <v-img :src="item.icon" style="max-width:22px;max-height:15px"/>
        </template>
        <template v-slot="{item}">
          {{ item.label }}
        </template>
      </v-select>

      <UserForm/>

      <v-btn
          icon
          color="black"
      >
        <v-icon>mdi-heart-outline</v-icon>
      </v-btn>
            <v-btn
                icon
                color="black"
                @click.stop="drawer = !drawer"
            >
              <v-icon>mdi-shopping-outline</v-icon>
            </v-btn>
        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            right
        >
          <v-list-item>

            <v-list-item-content>
              <v-list-item-title>John Leider</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense>
            <v-list-item
                v-for="item in itemNavigation"
                :key="item.title"
                link
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

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

              <router-link
                  to="/categoria_producto/1"
                  class="text-decoration-none"
              >Categorías</router-link>

            </v-tab>
            <v-tab>
              <router-link to="/new"
                           class="text-decoration-none red--text text-decoration-none text-capitalize"
              >New Arrivals ✨</router-link>
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
import {defineComponent, ref, Ref, watch, SetupContext, reactive} from "@vue/composition-api";
import CategoryModel from "@/models/CategoryModel/CategoryModel";
import {productsServices} from "@/Services/Productos/ProductsService";
import ProductModel from "@/models/Productos/ProductModel";
import i18n from "@/plugins/i18n";
import {WebPages} from "@/constants";
import UserForm from "@/components/cards/UserForm.vue";

export default defineComponent({
  name: "AppBar.vue",
  components:{
    UserForm
  },

  setup: function (_, context: SetupContext) {

    //Utilizamos ref cuando son variables primitivas como : booleano, number, string
    //Utilizamos reactive cuando son variables complejas : Arreglos y Objetos
    const drawer = ref (null)

    const itemNavigation = reactive([
          { title: 'Home', icon: 'mdi-view-dashboard' },
          { title: 'About', icon: 'mdi-forum' },
        ])

    const categorias = reactive([
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
    ])


    const items: string[] = reactive(['Hogar', 'Salud y Belleza', 'Juguetería', 'Tecnología'])

    const route = context.root.$route;

    const responseproductsCat: Ref<ProductModel | null> = ref(null);

    const responseCategory: Ref<CategoryModel | null> = ref(null);

    const searchProduct: Ref<ProductModel | any> = ref([]);

    const selectAuto: Ref<string> = ref('')
    const inputModel: Ref<string> = ref('')

    watch(selectAuto, async () => {
      const response = await productsServices.searchProducts(selectAuto.value)

      searchProduct.value = response.map((producto: any) => {
        return producto.producto_nombre
      })
    })

    const getProductsByCategory = async () => {

      const response = await productsServices.getProductsByCategory(route.params.categoria);

      responseCategory.value = new CategoryModel(response[0])
    }

    const buscarProductos = async () => {

      console.log(inputModel.value);
      if (inputModel.value.trim().length <= 0) return;

      context.root.$router.push({
        name: WebPages.PRODUCTSEARCH,
        params: {
          nom_pro: inputModel.value
        }
      }).catch(e => console.log("Error-Navbar: ", e));

    }

    const e1 = 'es';

    function selectLanguage(id: string) {
      i18n.locale = id;

    }

    const idiomas = [
      {
        id: 'es',
        label: 'Español',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/2880px-Bandera_de_Espa%C3%B1a.svg.png'
      },
      {id: 'en', label: 'Ingles', icon: 'https://assets.puzzlefactory.pl/puzzle/423/164/original.webp'},
      {
        id: 'fr',
        label: 'Frances',
        icon: 'https://static.magflags.net/media/catalog/product/cache/b756e98438727cbd4415a0b646d85461/F/R/FR-1x1.5.png'
      }

    ]


    return {
      e1,
      idiomas,
      responseproductsCat,
      responseCategory,
      searchProduct,
      selectAuto,
      inputModel,
      categorias, items,
      text: 'Hogar',
      getProductsByCategory,
      buscarProductos,
      selectLanguage,
      drawer,
      itemNavigation
    }
  }
})
</script>
<style scoped>
.button_offer {
  padding: 0 !important;
  margin: 0 !important;
}

.v-slide-group__content {
  display: flex !important;
  gap: 15px !important;
}


</style>