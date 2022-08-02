<template>
  <div>
    <AppBar/>
    <div>
      <v-img
          src="https://minisope.vtexassets.com/assets/vtex.file-manager-graphql/images/5261883e-f45d-464b-a8d2-58e7c9911136___a91f9ae6e0f1c1919dc4fdaeede91437.jpg"
      ></v-img>
    </div>

    <div  style="background:rgb(255,255,255)">
      <v-row>
        <v-col
            cols="2"
        >
          <v-card
              class="mx-auto"
              max-width="500"
          >
            <v-card-text
                color="white"
            >
              <v-card-title>FILTRADO POR:</v-card-title>

              <v-divider></v-divider>
            </v-card-text>

            <v-list>
              <v-list-group
                  v-for="item in items"
                  :key="item.title"
                  v-model="item.active"
                  :prepend-icon="item.action"
                  no-action
              >
                <template v-slot:activator>

                  <v-list-item-content class="px-0">
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item
                    v-for="child in item.items"
                    :key="child.title"
                >
                  <template v-slot:default="{ active }">
                    <v-list-item-action>
                      <v-checkbox :input-value="active"></v-checkbox>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title v-text="child.title"></v-list-item-title>
                    </v-list-item-content>
                  </template>
                </v-list-item>
              </v-list-group>

            </v-list>
          </v-card>
          <v-card-text>Precio</v-card-text>
          <v-range-slider
              dense
              hint="S/17.00 - S/90.00"
              max="50"
              min="-50"
              color="teal accent-4"
          >
          </v-range-slider>

        </v-col>

        <v-col cols="10">
          <v-row dense>
            <div
                v-if="responseproductsCat == null"
            >
              loading...
            </div>
            <v-col
                v-else
                cols="3"
                v-for="(producto_categoria,i)  in responseproductsCat.getProductArray()"
                :key="i">
              <v-card
                  class="mx-auto my-12 mx-5"
                  width="285"
                  elevation="0"
              >
                <div class="d-flex justify-space-between px-2 py-2">
                  <v-spacer></v-spacer>
                  <v-btn
                      icon
                      color="grey"
                      left
                      small
                  >
                    <v-icon>mdi-heart-outline</v-icon>
                  </v-btn>
                </div>
                <v-img
                    height="200"
                    :src="'data:image/jpeg;charset=utf-8;base64,' +producto_categoria.getProductImage()"
                ></v-img>

                <v-card-text>
                  <v-spacer></v-spacer>
                  <div>{{producto_categoria.getProductNombre()}}</div>
                </v-card-text>
                <v-card-text>
                  <v-chip-group
                      active-class="deep-purple accent-4 white--text"
                      column
                  >
                    <v-btn
                        text
                        color="error"
                    >
                      <v-card-subtitle class="text-md-h6 text-sm-subtitle-1 font-weight-bold">S/{{producto_categoria.getProductPrecio()}}</v-card-subtitle>
                    </v-btn>

                  </v-chip-group>
                  <v-card-actions class="d-flex justify-space-around">

                    <v-btn
                        color="red"
                        dark
                    >
                      AGREGAR A LA BOLSA
                    </v-btn>

                  </v-card-actions>

                </v-card-text>

              </v-card>
            </v-col>
          </v-row>

        </v-col>
      </v-row>

    </div>

    <v-divider></v-divider>

    <v-card-title>Hogar</v-card-title>
    <v-card-text>
      Tu hogar es un reflejo de tu personalidad, con cada artículo que eliges hablas un poco de ti y tu
      casa es el conjunto de todo eso Miniso Lover. Si crees que tu habitación, cocina, baño necesitan un
      nuevo toque de estilo o simplemente tienes en mente un proyecto de decoración para tu hogar, llegaste
      al lugar indicado... ¡Ven y disfruta de los mejores productos para el hogar en Miniso Peru! ¡Lleva lo
      mejor en accesorios para el hogar, organizadores, almohadas, lavandería, tomatodos, herramientas y
      además contamos con productos para tus mascotas!
    </v-card-text>

    <v-divider></v-divider>

    <AppFooter></AppFooter>

  </div>

</template>

<script lang="ts">
import AppBar from "../components/AppBar.vue";
import {defineComponent} from "@vue/composition-api";
import {onMounted, ref, Ref} from "@vue/composition-api/dist/vue-composition-api";
import ProductModel from "@/models/Productos/ProductModel";
import {productsServices} from "@/Services/Productos/ProductsService";

export default defineComponent({
  name: 'home',
  data: () => ({
    items: [
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
    ]
  }),

  components: {
    AppBar,
  },

  setup(_, context) {
    const modal = null

    const items = [
      {
        src: 'https://minisope.vtexassets.com/arquivos/ids/195904-800-800?v=637914622171200000&width=800&height=800&aspect=true',
      },
      {
        src: 'https://minisope.vtexassets.com/arquivos/ids/195766-1200-1200?v=637914621650970000&width=1200&height=1200&aspect=true',
      },
      {
        src: 'https://minisope.vtexassets.com/arquivos/ids/195812-1200-1200?v=637914621847030000&width=1200&height=1200&aspect=true',
      },
      {
        src: 'https://minisope.vtexassets.com/arquivos/ids/195813-1200-1200?v=637914621855330000&width=1200&height=1200&aspect=true',
      },
    ]

    const route = context.root.$route;

    const responseproductsCat : Ref<ProductModel|null> = ref(null);

    const getProductsByCategory = async () =>{

      const response = await productsServices.getProductsByCategory(route.params.categoria);
      responseproductsCat.value = new ProductModel(response)

    }

    onMounted( () => {
      getProductsByCategory();
    })


    return {
      items,
      modal,
      getProductsByCategory,
      responseproductsCat
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