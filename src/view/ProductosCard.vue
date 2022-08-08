<template>
  <div>
    <v-container fluid style="background:#ffffff">

      <v-container>
        <div v-if="products == null">
          <v-progress-circular
              style="height:400px; display:flex; align-content: center; justify-content: center"
              indeterminate
              color="red"
          ></v-progress-circular>
        </div>
        <v-row v-else>
          <v-col
              cols="6"
          >
            <v-carousel hide-delimiters>
              <v-carousel-item
                  :src="'data:image/jpeg;charset=utf-8;base64,' +products.getProductId1()"
              ></v-carousel-item>
              <v-carousel-item
                  :src="'data:image/jpeg;charset=utf-8;base64,' +products.getProductId2()"
              ></v-carousel-item>
              <v-carousel-item
                  :src="'data:image/jpeg;charset=utf-8;base64,' +products.getProductId3()"
              ></v-carousel-item>

            </v-carousel>

          </v-col>

          <v-col
              cols="6"
          >
            <v-card-text>Miniso</v-card-text>
            <v-spacer></v-spacer>

            <v-card-text>

              {{products.getProductNombre()}}

            </v-card-text>

            <v-card-text>
              <v-card-subtitle
                  color="#E53935"
                  class="text-md-h6 text-sm-subtitle-1 font-weight-bold">
                S/{{products.getProductPrecio()}}
              </v-card-subtitle>
              <v-divider></v-divider>

            </v-card-text>

            <v-btn
                class="mx-2"
                dark
                small
                color="red"
            >
              <v-icon dark>
                mdi-minus
              </v-icon>
            </v-btn>

            <v-btn
                class="mx-2"
                dark
                small
                color="red"
            >
              <v-icon dark>
                mdi-plus
              </v-icon>
            </v-btn>

            <v-btn
                class="mx-2"
                outlined
                color="red"
                dark
            >
              {{$t('a mi bolsa')}}
            </v-btn>

            <v-btn
                class="mx-2"
                outlined
                color="red"
                dark
            >
              {{$t('comprar ahora')}}
            </v-btn>

            <v-card flat>
              <v-card-text>
                <v-container
                    fluid
                    class="pa-0"
                >
                  <v-row>
                    <v-col cols="12">
                    </v-col>

                    <v-col
                        cols="6"
                        sm="3"
                    >
                      <v-btn
                          icon
                      >
                        <v-icon>mdi-truck-fast-outline</v-icon>
                      </v-btn>

                    </v-col>

                    <v-col
                        cols="6"
                        sm="3"
                    >
                      <v-btn
                          icon
                      >
                        <v-icon>mdi-credit-card-multiple-outline</v-icon>
                      </v-btn>
                    </v-col>

                    <v-col
                        cols="6"
                        sm="3"
                    >
                      <v-btn
                          icon
                      >
                        <v-icon>mdi-lock-outline</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>

            <v-card-subtitle>{{$t('descripcion')}}</v-card-subtitle>

            <v-card-text>{{products.getProductDescripcion()}}</v-card-text>

          </v-col>

        </v-row>

      </v-container>
    </v-container>

    <v-container fluid style="background:rgb(255,255,255)">
      <h1 class="text-center">{{$t('completa')}}</h1>
      <v-slide-group
          v-model="modal"
          center-active
          show-arrows
      >
        <div
            style="display:flex !important; gap: 15px !important;">
          <div
            v-if="responseproducts == null">
            Loading...
          ></div>
          <v-slide-item
              v-else
              v-for="(productocat,i)  in responseproducts.getProductArray()"
              :key="i"
          >
            <v-card
                class="mx-auto my-12 mx-5"
                width="285"
            >
              <div class="d-flex justify-space-between px-2 py-2">
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
                  :src="'data:image/jpeg;charset=utf-8;base64,' +productocat.getProductImage()"
              ></v-img>

              <v-card-text>
                <v-spacer></v-spacer>
                <div>{{productocat.getProductNombre()}}</div>
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
                    <v-card-subtitle class="text-md-h6 text-sm-subtitle-1 font-weight-bold">S/{{productocat.getProductPrecio()}}</v-card-subtitle>
                  </v-btn>

                </v-chip-group>
                <v-card-actions class="d-flex justify-space-around">
                  <v-btn
                      outlined
                      color="red"
                      dark
                  >
                    {{$t('comprar')}}<br>{{$t('ahora')}}
                  </v-btn>
                  <v-btn
                      color="red"
                      dark
                  >
                    {{$t('agregar')}} <br>{{$t('a la bolsa')}}
                  </v-btn>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-slide-item>
        </div>
      </v-slide-group>

    </v-container>

  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/composition-api";
import {onMounted, ref, Ref} from "@vue/composition-api/dist/vue-composition-api";
import DetailsItemModel from "@/models/DetailsModel/DetailsItemModel";
import ProductModel from "@/models/Productos/ProductModel";


import {productsDetails} from "@/Services/DetailsProducts/DetailsProducts";
import {productsServices} from "@/Services/Productos/ProductsService";

export default defineComponent({
  name: 'home',
  data: () =>({
    icons: [
      'mdi-vuetify',
      'mdi-security',
      'mdi-credit-card',
      'mdi-instagram',
    ],

  }),

  setup(_, context) {

    const route = context.root.$route;

    const modal = null

    const items = [
      {
        src: 'https://minisope.vtexassets.com/assets/vtex.file-manager-graphql/images/e0ea94fc-0ec3-4c74-874a-f85a9b790709___5f37a0cb7dc6a1e6b616ac32cd26cc60.jpg',
      },
      {
        src: 'https://minisope.vtexassets.com/assets/vtex.file-manager-graphql/images/9cea5910-7705-4685-9016-e59ff038555a___6168ebe98a5d2dcb2ca2fe0fc9d3e2ff.jpg',
      },
      {
        src: 'https://minisope.vtexassets.com/assets/vtex.file-manager-graphql/images/dda50d02-4e07-44ef-b6a4-bea209f6c74e___5009986d494a9ce5d6006ce306e9058c.jpg',
      },
      {
        src: 'https://minisope.vtexassets.com/assets/vtex.file-manager-graphql/images/a7fc541f-6239-4675-b00e-e71cbf92854b___0e5a37e4a2052a26186b8888ba254ae9.jpg',
      },
    ]

    const products : Ref<DetailsItemModel|null> = ref(null);

    const responseproducts : Ref<ProductModel|null> = ref(null);

    const  getProducts = async () => {

      const response = await productsDetails.getProducts(route.params.producto_id)
      products.value = new DetailsItemModel(response)

      const response1 = await productsServices.getProductsByCategory(products.value.getCategoria());
      responseproducts.value = new ProductModel(response1['productos'])

    }

    onMounted( () => {
      getProducts()
    })


    return {
      items,
      modal,
      products,
      responseproducts,
      getProducts

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