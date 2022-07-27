<template>
  <div>
    <AppBar/>
    <!--Carrusel  imagenes-->
    <v-carousel hide-delimiters>
      <v-carousel-item

          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <!--Fin de Carrusel imagenes-->

    <!--Cuerpo de imagenes cards-->
    <v-container fluid style="background:#e9c2f8">
      <v-container>
        <h1 class="text-center">No sabía lo que necesitaba</h1>
        <v-row>
          <v-col cols="3">
            <router-link to="https://www.miniso.pe/Papeleria" >
              <v-img
                  title="Bolsas y Mochilas"
                  src="https://minisope.vtexassets.com/assets/vtex.file-manager-graphql/images/e1009d7d-f9cf-4232-a8fe-dd31755b2c5d___b9fdc839e1d60ea36cf9be7d06107193.webp"
              />
            </router-link>
            </v-col>

          <v-col cols="3">
            <v-img
                title="Cosméticos"
                src="https://minisope.vtexassets.com/assets/vtex.file-manager-graphql/images/24954bed-8ed6-4339-a2e2-24c2bdb32071___3b5b0c1725fc47d5ae7e5d4a97617077.webp"/>
          </v-col>

          <v-col cols="3">
            <v-img
                title="Papelería"
                src="https://minisope.vtexassets.com/assets/vtex.file-manager-graphql/images/d8e55596-03e9-4edf-95d3-e4abea313e75___0bafe8a6448e955589767bcc048b4ae9.webp"/>
          </v-col>
          <v-col cols="3">
            <v-img
                title="Viajes"
                src="https://minisope.vtexassets.com/assets/vtex.file-manager-graphql/images/d7ef559d-a563-4d0c-8521-443c63c12695___30e8f0ba26e110767319aa57ea5053ba.webp"/>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
    <!--Cuerpo de imagenes cards-->

    <!--Slide groups para mostrar productos pagina principal-->
    <div v-if="products == null">
      <v-progress-circular
          indeterminate
          color="red"
      ></v-progress-circular>
    </div>
    <div v-else>
      <AppSlider :productos="products.getProductArray()"/>
    </div>
    <!--Slide groups para mostrar productos pagina principal-->

    <!--Categorias Hogar Slide groups para mostrar productos por categoria-->
    <v-container fluid style="background:#ffffff">
      <v-img
          title="¿Cómo comprar en Miniso Online?"
          src="https://minisope.vtexassets.com/assets/vtex.file-manager-graphql/images/fe9feabb-5908-4ece-8563-be66cbaed09b___8052c97bb019b80eeae085dfc3771780.webp"
          alt="¿Cómo comprar en Miniso Online?"
      />
      <h1 class="text-center">No sabía lo que necesitaba</h1>
      <v-container>
        <v-row>
          <v-col
              cols="12"
              sm="4"
          >
            <v-img
                title="Hogar"
                height="100%"
                src="https://minisope.vtexassets.com/assets/vtex.file-manager-graphql/images/c5ad1085-f9f8-4d55-a443-83d30fc98aca___f2c3a65571546c3ea08249fc35bb9d8e.jpg"
            />
          </v-col>
          <v-col
              md="8"
              sm="8"
              cols="12"
          >
            <h1 class="text-center">Hogar ✨</h1>
            <v-slide-group
                v-model="modal"
                center-active
                show-arrows
            >
              <div
                  style="display:flex !important; gap: 15px !important;">
                <div v-if="responseproductsCat == null">

                </div>
                <v-slide-item
                    v-else
                    v-for="(productocat,i)  in responseproductsCat.getProductArray()"
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
                          right
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
                          S/{{productocat.getProductPrecio()}}
                        </v-btn>

                      </v-chip-group>
                      <v-card-actions class="d-flex justify-space-around">
                        <v-btn
                            outlined
                            color="red"
                            dark
                        >
                          COMPRAR <br>AHORA
                        </v-btn>
                        <v-btn
                            color="red"
                            dark
                        >
                          AGREGAR <br>A LA BOLSA
                        </v-btn>
                      </v-card-actions>
                    </v-card-text>
                  </v-card>
                </v-slide-item>
              </div>
            </v-slide-group>

          </v-col>
        </v-row>

</v-container>
    </v-container>
    <!--Fin Categorias Hogar Slide groups para mostrar productos por categoria-->
    <!--Categorias Salud y belleza Slide groups para mostrar productos por categoria-->

    <v-container fluid style="background:#ffffff">
      <v-container>
        <v-row>
          <v-col
              cols="12"
              sm="4"
          >
            <v-img
                title="Salud y belleza"
                height="100%"
                src="https://minisope.vtexassets.com/assets/vtex.file-manager-graphql/images/aeacbcdc-fec9-4830-a677-e4abd6f3094c___236b8e90f53d9b874b0be625316f72b8.jpg"
            />
          </v-col>
          <v-col
              md="8"
              sm="8"
              cols="12"
          >
            <h1 class="text-center">Salud y Belleza ✨</h1>
            <v-slide-group
                v-model="modal"
                center-active
                show-arrows
            >
              <div
                  style="display:flex !important; gap: 15px !important;">
                <div v-if="responseproductsSal == null">
                  <v-progress-circular
                      indeterminate
                      color="primary"
                  ></v-progress-circular>
                </div>
                <v-slide-item
                    v-else
                    v-for="(productocat,i)  in responseproductsSal.getProductArray()"
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
                          right
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
                          S/{{productocat.getProductPrecio()}}
                        </v-btn>

                      </v-chip-group>
                      <v-card-actions class="d-flex justify-space-around">
                        <v-btn
                            outlined
                            color="red"
                            dark
                        >
                          COMPRAR <br>AHORA
                        </v-btn>
                        <v-btn
                            color="red"
                            dark
                        >
                          AGREGAR <br>A LA BOLSA
                        </v-btn>
                      </v-card-actions>
                    </v-card-text>
                  </v-card>
                </v-slide-item>
              </div>
            </v-slide-group>

          </v-col>
        </v-row>
      </v-container>
    </v-container>
    <!--Fin Categorias Salud y belleza Slide groups para mostrar productos por categoria-->

    <!--Catergoria Tecnologia Slide groups para mostrar productos -->

    <v-container fluid style="background:rgba(245,241,241,0.93)">


      <h1 class="text-center">Tecnología 💻</h1>

      <v-slide-group
          v-model="modal"
          center-active
          show-arrows
      >
        <div
            style="display:flex !important; gap: 15px !important;">
          <div v-if="responseproductsTeg == null">

          </div>
          <v-slide-item
              v-else
              v-for="(productocat,i)  in responseproductsTeg.getProductArray()"
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
                    S/{{productocat.getProductPrecio()}}
                  </v-btn>

                </v-chip-group>
                <v-card-actions class="d-flex justify-space-around">
                  <v-btn
                      outlined
                      color="red"
                      dark
                  >
                    COMPRAR <br>AHORA
                  </v-btn>
                  <v-btn
                      color="red"
                      dark
                  >
                    AGREGAR <br>A LA BOLSA
                  </v-btn>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-slide-item>
        </div>
      </v-slide-group>
    </v-container>
    <!--Catergoria Tecnologia Slide groups para mostrar productos -->

    <!--Catergoria Juguetes Slide groups para mostrar productos -->

    <v-container fluid style="background:rgba(245,241,241,0.93)">
      <h1 class="text-center">Juguetes ✨</h1>
      <v-slide-group
          v-model="modal"
          center-active
          show-arrows
      >
        <div
            style="display:flex !important; gap: 15px !important;">

          <div v-if="responseproductsJug == null">

          </div>
          <v-slide-item
              v-else
              v-for="(productocat,i)  in responseproductsJug.getProductArray()"
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
                    S/{{productocat.getProductPrecio()}}
                  </v-btn>

                </v-chip-group>
                <v-card-actions class="d-flex justify-space-around">
                  <v-btn
                      outlined
                      color="red"
                      dark
                  >
                    COMPRAR <br>AHORA
                  </v-btn>
                  <v-btn
                      color="red"
                      dark
                  >
                    AGREGAR <br>A LA BOLSA
                  </v-btn>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-slide-item>
        </div>
      </v-slide-group>

    </v-container>
    <!--Catergoria Juguetes Slide groups para mostrar productos -->
    <!--TEST-->
    <!--Catergoria Moda Slide groups para mostrar productos -->

    <v-container fluid style="background:rgba(245,241,241,0.93)">
      <h1 class="text-center">Los mejores accesorios de Moda ✨</h1>
      <v-slide-group
          v-model="modal"
          center-active
          show-arrows
      >
        <div
            style="display:flex !important; gap: 15px !important;">

          <div v-if="responseproductsMod == null">

          </div>
          <v-slide-item
              v-else
              v-for="(productocat,i)  in responseproductsMod.getProductArray()"
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
                    S/{{productocat.getProductPrecio()}}
                  </v-btn>

                </v-chip-group>
                <v-card-actions class="d-flex justify-space-around">
                  <v-btn
                      outlined
                      color="red"
                      dark
                  >
                    COMPRAR <br>AHORA
                  </v-btn>
                  <v-btn
                      color="red"
                      dark
                  >
                    AGREGAR <br>A LA BOLSA
                  </v-btn>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-slide-item>
        </div>
      </v-slide-group>

    </v-container>
    <!--Catergoria Moda Slide groups para mostrar productos -->

    <!--Catergoria Cosmeticos Slide groups para mostrar productos -->

    <v-container fluid style="background:rgba(245,241,241,0.93)">
      <h1 class="text-center">Cosméticos</h1>
      <v-slide-group
          v-model="modal"
          center-active
          show-arrows
      >
        <div
            style="display:flex !important; gap: 15px !important;">
          <div v-if="responseproductsCos == null">

          </div>
          <v-slide-item

              v-else
              v-for="(productocat,i)  in responseproductsCos.getProductArray()"
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
                    S/{{productocat.getProductPrecio()}}
                  </v-btn>

                </v-chip-group>
                <v-card-actions class="d-flex justify-space-around">
                  <v-btn
                      outlined
                      color="red"
                      dark
                  >
                    COMPRAR <br>AHORA
                  </v-btn>
                  <v-btn
                      color="red"
                      dark
                  >
                    AGREGAR <br>A LA BOLSA
                  </v-btn>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-slide-item>
        </div>
      </v-slide-group>

    </v-container>
    <!--Catergoria Cosmeticos Slide groups para mostrar productos -->

    <!--Rutas para clientes -->

    <v-container fluid style="background:#ffffff">
      <v-container>
        <v-row>
          <v-col
              cols="4"
          >

            <v-img title="Ventas corporativas" sizes="" srcset="" height="80%"
                   src="https://minisope.vtexassets.com/assets/vtex/assets-builder/minisope.store-theme/0.19.11/deals/img-deal-01___e5c7c57af02d93a6c6cfe62a4df896af.png"/>

            <v-row
                align="center"
                justify="space-around"
            >
              <v-btn text>
                VENTAS CORPORATIVAS
              </v-btn>

            </v-row>
          </v-col>

          <v-divider
              inset
              color="black"
              vertical
          ></v-divider>

          <v-col cols="4">
            <v-img title="Preguntas frecuentes" sizes="" srcset="" height="80%"
                   src="https://minisope.vtexassets.com/assets/vtex.file-manager-graphql/images/13b44f59-1a53-4847-b1b2-d7e9b459b020___7fdaf968b091a5aefc925d676ecb668d.jpg"/>
            <v-row
                align="center"
                justify="space-around"
            >
              <v-btn text>
                PREGUNTAS FRECUENTES
              </v-btn>

            </v-row>

          </v-col>

          <v-divider
              color="black"
              vertical
          ></v-divider>

          <v-col cols="4" >
            <v-img title="Libro de reclamaciones" sizes="" srcset="" height="80%"
                   src="https://minisope.vtexassets.com/assets/vtex/assets-builder/minisope.store-theme/0.18.0/deals/img-deal-03___b2e5420f0b992e9d373413cfcf2c638d.png"/>
            <v-row
                align="center"
                justify="space-around"
            >
              <v-btn text>
                LIBRO DE RECLAMACIONES
              </v-btn>
            </v-row>

          </v-col>

        </v-row>
      </v-container>

    </v-container>
    <!--Rutas para clientes -->
  </div>

</template>

<!--Script -->

<script lang="ts">
import AppBar from "../components/AppBar.vue";
import AppSlider from "../components/AppSlider.vue";
import {defineComponent, onMounted, Ref, ref} from "@vue/composition-api";
import {productsServices} from '@/Services/Productos/ProductsService'
import ProductModel from "@/models/Productos/ProductModel";
import IProductos from "@/interfaces/Productos/IProductos";

export default defineComponent({
  name: 'home',
  components:{
    AppBar,
    AppSlider
  },

  setup() {
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

    const products : Ref<ProductModel|null> = ref(null);

    const producto_categoria:Ref<IProductos[]|any> = ref(null);
    const responseproductsCat : Ref<ProductModel|null> = ref(null);
    const responseproductsSal : Ref<ProductModel|null> = ref(null);
    const responseproductsTeg : Ref<ProductModel|null> = ref(null);
    const responseproductsJug : Ref<ProductModel|null> = ref(null);
    const responseproductsMod : Ref<ProductModel|null> = ref(null);
    const responseproductsCos : Ref<ProductModel|null> = ref(null);


    const  getProducts = async () => {

      const response = await productsServices.getProducts()
      products.value = new ProductModel(response)


    }
    const getProductsByCategory = async () =>{

      const response = await productsServices.getProductsByCategory(1);
      producto_categoria.value = response;
      responseproductsCat.value = new ProductModel(producto_categoria.value)

      const response1 = await productsServices.getProductsByCategory(2);
      producto_categoria.value = response1;
      responseproductsSal.value = new ProductModel(producto_categoria.value)

      const response2 = await productsServices.getProductsByCategory(8);
      producto_categoria.value = response2;
      responseproductsTeg.value = new ProductModel(producto_categoria.value)

      const response3 = await productsServices.getProductsByCategory(4);
      producto_categoria.value = response3;
      responseproductsJug.value = new ProductModel(producto_categoria.value)

      const response4 = await productsServices.getProductsByCategory(3);
      producto_categoria.value = response4;
      responseproductsMod.value = new ProductModel(producto_categoria.value)

      const response5 = await productsServices.getProductsByCategory(6);
      producto_categoria.value = response5;
      responseproductsCos.value = new ProductModel(producto_categoria.value)

    }

    onMounted( () => {
      getProducts()
      getProductsByCategory();
    })


    return {
      items,
      modal,
      products,
      getProducts,
      getProductsByCategory,
      responseproductsCat,
      responseproductsSal,
      responseproductsTeg,
      responseproductsJug,
      responseproductsMod,
      responseproductsCos

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