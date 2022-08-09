<template>
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
      <v-container fluid style="background:rgb(255,255,255)">
        <h1 class="text-center">{{$t('completa')}}</h1>
        <!--AppSlider-->
        <div v-if="!responseproducts">Cargando...</div>
        <div v-else>
          <AppSlider
              :productos="responseproducts.getProductArray()"/>
        </div>
      </v-container>
    </v-container>
</template>

<script lang="ts">
import {defineComponent} from "@vue/composition-api";
import {onMounted, ref, Ref} from "@vue/composition-api/dist/vue-composition-api";
import DetailsItemModel from "@/models/DetailsModel/DetailsItemModel";
import ProductModel from "@/models/Productos/ProductModel";
import AppSlider from "@/components/AppSlider.vue";

import {productsDetails} from "@/Services/DetailsProducts/DetailsProducts";
import {productsServices} from "@/Services/Productos/ProductsService";

export default defineComponent({
  name: 'home',
  components:{AppSlider},
  setup(_, context) {

    /**
     *
     */
    const icons : Ref<string[]> =  ref([
      'mdi-vuetify',
      'mdi-security',
      'mdi-credit-card',
      'mdi-instagram',
    ])

    /**
     *
     */
    const route = context.root.$route;

    /**
     *
     */
    const modal = null


    /**
     *
     */


    const products : Ref<DetailsItemModel|null> = ref(null);

    /**
     *
     */
    const responseproducts : Ref<ProductModel|null> = ref(null);

    /**
     * This function will return details of a product
     */
    const  getProducts = async () => {

      const responseProduct = await productsDetails.getProducts(route.params.producto_id)
      products.value = new DetailsItemModel(responseProduct)

      const responseCategory = await productsServices.getProductsByCategory(products.value.getCategoria());
      responseproducts.value = new ProductModel(responseCategory['productos'])



    }

    onMounted( () => {
      getProducts()
    })


    return {
      modal,
      icons,
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