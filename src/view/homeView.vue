<template>
  <div>
    <!---------------------------------------------------------------------------->
    <!----------------------------------CAROUSEL---------------------------------->
    <!---------------------------------------------------------------------------->
    <v-carousel hide-delimiters>
      <router-link to="/categoria_producto/1">
      <v-carousel-item

          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
      ></v-carousel-item>
      </router-link>
    </v-carousel>

    <!---------------------------------------------------------------------------->
    <!------------------------------BODY CARD IMAGES------------------------------>
    <!---------------------------------------------------------------------------->
    <v-container fluid style="background:#e9c2f8">
      <v-container>
        <h1 class="text-center">{{ $t('no_sabia') }}</h1>
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

    <!-------------------------------------------------------------------------->
    <!--------------------------SLIDE GROUP MINISO WOW-------------------------->
    <!-------------------------------------------------------------------------->
    <v-container fluid style="background:rgba(245,241,241,0.93)">
      <div v-if="products == null">
        <v-progress-circular
            indeterminate
            color="red"
        ></v-progress-circular>
      </div>
      <div v-else>
        <AppSlider
            title="Miniso Wow✨"
            :productos="products.getProductArray()"/>
      </div>
    </v-container>


    <!--------------------------------------------------------------------------->
    <!-------------------------------HOME CATEGORY------------------------------->
    <!--------------------------------------------------------------------------->
    <div v-if="category == null ">Loading...</div>
    <div v-else>
      <div>
        <v-container fluid style="background:#ffffff">
          <v-img
              src="https://minisope.vtexassets.com/assets/vtex.file-manager-graphql/images/fe9feabb-5908-4ece-8563-be66cbaed09b___8052c97bb019b80eeae085dfc3771780.webp"
              alt="¿Cómo comprar en Miniso Online?"
          />
          <h1 class="text-center">{{ $t('no_sabia') }}</h1>

          <v-container>
            <v-row>
              <v-col
                  cols="12"
                  sm="4"
              >
                <router-link to="/categoria_producto/1">
                  <v-img
                      title="Hogar"
                      height="100%"
                      src="https://minisope.vtexassets.com/assets/vtex.file-manager-graphql/images/c5ad1085-f9f8-4d55-a443-83d30fc98aca___f2c3a65571546c3ea08249fc35bb9d8e.jpg"
                  />
                </router-link>
              </v-col>
              <v-col
                  md="8"
                  sm="8"
                  cols="12"
              >
                  <AppSlider
                      :title="$t('hogar')"
                      :productos="category.getCategoryArray()[0].getProductArray()"/>

              </v-col>
            </v-row>
          </v-container>
        </v-container>

        <!--------------------------------------------------------------------------->
        <!------------------------------Health & Beauty------------------------------>
        <!--------------------------------------------------------------------------->
        <v-container fluid style="background:#ffffff">
          <v-container>
            <v-row>
              <v-col
                  cols="12"
                  sm="4"
              >
                <router-link to="/categoria_producto/2">
                  <v-img
                      title="Salud y belleza"
                      height="100%"
                      src="https://minisope.vtexassets.com/assets/vtex.file-manager-graphql/images/aeacbcdc-fec9-4830-a677-e4abd6f3094c___236b8e90f53d9b874b0be625316f72b8.jpg"
                  />
                </router-link>
              </v-col>
              <v-col
                  md="8"
                  sm="8"
                  cols="12"
              >
                <div>
                  <AppSlider
                      :title="$t('salud')"
                      :productos="category.getCategoryArray()[1].getProductArray()"/>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-container>

        <!--------------------------------------------------------------------------->
        <!------------------------------Technology----------------------------------->
        <!--------------------------------------------------------------------------->
        <v-container fluid style="background:rgba(245,241,241,0.93)">

          <h1 class="text-center">{{$t('tecno')}}</h1>

          <div>
            <AppSlider
                :productos="category.getCategoryArray()[7].getProductArray()"/>
          </div>
        </v-container>

        <!--------------------------------------------------------------------------->
        <!------------------------------Toys----------------------------------------->
        <!--------------------------------------------------------------------------->
        <v-container fluid style="background:rgba(245,241,241,0.93)">
          <h1 class="text-center">{{ $t('juguetes')}}</h1>

          <div>
            <AppSlider
                :productos="category.getCategoryArray()[3].getProductArray()"/>
          </div>

        </v-container>
        <!--------------------------------------------------------------------------->
        <!------------------------------Moda----------------------------------------->
        <!--------------------------------------------------------------------------->

        <v-container fluid style="background:rgba(245,241,241,0.93)">
          <h1 class="text-center">{{ $t('los_mejo')}}</h1>
          <div>
            <AppSlider
                :productos="category.getCategoryArray()[2].getProductArray()"/>
          </div>

        </v-container>
        <!--------------------------------------------------------------------------->
        <!-----------------------------Cosmetics------------------------------------->
        <!--------------------------------------------------------------------------->

        <v-container fluid style="background:rgba(245,241,241,0.93)">
          <h1 class="text-center">{{ $t('cosmeticos')}}</h1>
          <div>
            <AppSlider
                :productos="category.getCategoryArray()[5].getProductArray()"/>
          </div>
        </v-container>
      </div>

    </div>


    <!--Client routes -->

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
                {{$t('ventas')}}
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
                {{$t('preguntas')}}
              </v-btn>

            </v-row>

          </v-col>

          <v-divider
              inset
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
                {{$t('libro')}}
              </v-btn>
            </v-row>

          </v-col>

        </v-row>
      </v-container>

    </v-container>
  </div>

</template>

<!--Script -->

<script lang="ts">
import AppSlider from "../components/AppSlider.vue";
import {defineComponent, onMounted, Ref, ref} from "@vue/composition-api";
import {productsServices} from '@/Services/Productos/ProductsService'
import ProductModel from "@/models/Productos/ProductModel";
import CategoryAllModel from "@/models/CategoryModel/CategoryAllModel";

export default defineComponent({
  name: 'home',
  components:{
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

    const category : Ref<CategoryAllModel|null> = ref(null)



    const  getProducts = async () => {

      const response = await productsServices.getProducts()
      //Instanciar la clase
      products.value = new ProductModel(response)
    }

    const getProductsByCategory = async () =>{

      const categoryList = await productsServices.getAllProductsByCategory();
      console.log(new CategoryAllModel(categoryList))

      category.value = new CategoryAllModel(categoryList)


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
      category

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