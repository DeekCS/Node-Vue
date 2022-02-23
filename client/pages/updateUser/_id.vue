<template>
<!--  form to update user data from the id params using Nuxt and Vuetify -->
<v-form v-model="valid" ref="form" @submit.prevent="updateUser">
    <v-card>
        <v-card-title>
            <span class="headline">Update User</span>
            <v-spacer></v-spacer>

<!--            delete btn-->
            <v-btn flat icon @click.native="deleteUser">
                <v-icon>delete</v-icon>
            </v-btn>
        </v-card-title>
        <v-card-text>
            <v-text-field v-model="user.username" label="User Name" required></v-text-field>
            <v-text-field v-model="user.name" label="Name" required></v-text-field>
            <v-text-field v-model="user.age" label="age" required></v-text-field>
            <v-text-field v-model="user.phone" label="phone" required></v-text-field>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" type="submit" :disabled="!valid">Submit</v-btn>
        </v-card-actions>
    </v-card>
</v-form>
</template>


<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      user: {
        username: "",
        name: "",
        age: "",
        phone: ""
      },
      valid: true
    };
  },

  created() {
    this.get()
  },

  methods: {
    get() {
      axios.get("http://localhost:4444/users/" + this.$route.params.id)
        .then(response => {
          this.user = response.data;
          console.log(this.user);
        })
        .catch(error => {
          console.log(error)
        })
    },
    updateUser() {
      axios.put("http://localhost:4444/users/" + this.$route.params.id, this.user)
        .then(response => {
          // this.$router.push("/");
          console.log(response);
        })
        .catch(error => {
          console.log(error)
        })
    },
    validate() {
      this.valid = this.$refs.form.validate();
    },

  }
}


</script>


<style>

</style>
