<template>
  <v-menu
      bottom
      min-width="200px"
      rounded
      offset-y
  >
    <template v-slot:activator="{ on }">
      <v-btn
          icon
          color="black"
          v-on="on"
      >
        <v-avatar
            size="48"
        >
          <v-icon>mdi-penguin</v-icon>
        </v-avatar>
      </v-btn>
    </template>
    <v-card>
      <v-list-item-content class="justify-center">
        <div class="mx-auto text-center">

          <h3>¡Ingresa a tu cuenta Miniso!</h3>

          <v-divider class="my-3"></v-divider>
          <v-btn
              depressed
              rounded
              text
          >
            RECIBIR CODIGO DE ACCESO POR E-MAL
          </v-btn>
          <v-divider class="my-3"></v-divider>

          <v-dialog
              v-model="dialog"
              persistent
              max-width="600px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  v-bind="attrs"
                  v-on="on"
                  depressed
                  rounded
                  text
              >
                ENTRAR CON E-MAIL Y CONTRASEÑA
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">Ingresa a tu cuenta</span>
              </v-card-title>
              <v-alert
                  :value="alert.value"
                  :type="alert.color"
              >
                {{ alert.text }}
              </v-alert>
              <v-card-text>
                <v-container>
                  <v-form
                      ref="formulario"
                      v-model="validForm"
                      lazy-validation
                  >
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                            v-model="user.nombre"
                            label="Ingresa tu nombre*"
                            persistent-hint
                            required
                            :rules="[v => !!v || 'Nombre requerido']"
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                            v-model="user.email"
                            label="Email*"
                            required
                            type="email"
                            :rules="[v => !!v || 'Correo requerido',v => /.+@.+\..+/.test(v) || 'Correo valido',]"
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                            v-model="user.password"
                            label="Password*"
                            type="password"
                            :rules="[v => !!v || 'Contraseña requerida.',v => (v && v.length >= 6) || 'Minimo 6 digitos',]"
                            required
                        />
                      </v-col>

                    </v-row>
                  </v-form>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="red darken-1"
                    text
                    @click="dialog = false"
                >
                  Volver
                </v-btn>
                <v-btn
                    color="red darken-1"
                    text
                    @click="registerUser"
                    :disabled="!validForm"

                >
                  Registrar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-divider class="my-3"></v-divider>
          <v-btn
              depressed
              rounded
              text
          >
            ENTRAR CON GOOGLE
          </v-btn>
          <v-divider class="my-3"></v-divider>
          <v-btn
              depressed
              rounded
              text
          >
            ENTRAR CON FACEBOOK
          </v-btn>

        </div>
      </v-list-item-content>
    </v-card>
  </v-menu>

</template>

<script lang="ts">
import {defineComponent, ref, Ref, reactive, SetupContext} from "@vue/composition-api";
import {userService} from "@/Services/UserService/UserService";

export default defineComponent({

  name: "UserForm.vue",
  props:{
    registerUser:{
      type: Object
    }
  },

  setup: function (_, context: SetupContext) {

    const dialog: Ref<boolean> = ref(false)

    const validForm = false;

    const user = reactive({
      nombre: '',
      email: '',
      password: ''
    })

    const alert = reactive({
      value: false,
      text: '',
      color: 'error'
    })

    const registerUser = async () => {

      const validate = context.refs.formulario.validate()

      if(validate){
        await userService.registerUser(user).then(res => {
          console.log(res);
          if (res.registered == true) {
            dialog.value = false
          } else {
            alert.value = true;
            alert.text = res.info
            alert.color = 'error'

          }
        })
      }
    }


    return {

      dialog,
      validForm,
      alert,
      user
    }
  }
})

</script>
<style scoped>
.button_offer {
  padding: 0 !important;
  margin: 0 !important;
}

</style>