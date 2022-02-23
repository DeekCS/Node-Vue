<template>
  <!-- create form create user using Vuetify -->
  <v-form name="createUserForm" method="post" v-model="valid" ref="createUserForm" @submit.prevent="createUser">
    <v-card>
      <v-card-title>
        <span class="headline">Create User</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout row wrap>
            <v-flex xs12>
              <v-text-field
                v-model="user.username"
                :rules="[v => !!v || 'User Name is required']"
                label="User Name"
                name="username"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                v-model="user.name"
                :rules="[v => !!v || 'Name is required']"
                label="Name"
                name="name"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                v-model="user.phone"
                :rules="[v => !!v || 'Phone is required']"
                label="Phone"
                name="phone"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                v-model="user.age"
                :rules="[v => !!v || 'Age is required']"
                label="Age"
                name="age"
                required
              ></v-text-field>
            </v-flex>
            <!--submit btn-->
            <v-flex xs12>
              <v-btn
                color="primary"
                dark
                type="submit"
                :disabled="!valid"
              >
                Create
              </v-btn>
            </v-flex>

          </v-layout>

        </v-container>
      </v-card-text>
    </v-card>
  </v-form>
</template>

<script>
//post data to server api create user using axios
export default {
  data() {
    return {
      user: {
        username: '',
        name: '',
        phone: '',
        age: ''
      },
      valid: false
    }
  },
  //render the user after submit without refresh
  // mounted() {
  //
  // },
  methods: {
    createUser() {
      this.$refs.createUserForm.validate()
      if (this.valid) {
        this.$store.dispatch('createUser', this.user)
        // this.$router.push('/')
        this.$emit("add new user")
      }
    }
  }
}

</script>

<style>

</style>
