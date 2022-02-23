<template>
  <!--show all users from api   -->
  <div class="">
    <h1>Users</h1>
    <v-btn
      color="primary"
      @click="$router.push('/CreateUser')"
      float="right"
    >
      Create User
    </v-btn>
    <template v-if="users.length > 0 ">

      <v-simple-table >
        <template v-slot:default>
          <thead>
          <tr>
            <th class="text-left">
            #
            </th>
            <th class="text-left">
              User Name
            </th>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Age
            </th>
            <th class="text-left">
              Phone
            </th>
            <th class="text-left">
              Actions
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
            v-for="user in users"
            :key="user.id"
          >
            <td class="text-left">{{user.id}}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.phone }}</td>
            <td>
              <v-btn
                color="primary"
                @click="updateUser(user.id)"
              >
                Edit
              </v-btn>
              <v-btn
                color="error"
                @click="deleteUser(user.id)"
              >
                Delete
              </v-btn>
            </td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>

    </template>

    <template v-else>
     <h2>NO USERS FOUND !</h2>
    </template>


<!--          <CreateUser @add-user="get()"/>-->
  </div>
</template>

<script>
import axios from 'axios'
import Swal from "sweetalert2";

export default {
  desserts: [],
  data() {
    return {
      users: this.$store.state.users,
    }
  },
  created() {
    this.get()
  },

  methods: {
    get() {
      console.log("getting")
      axios.get('http://localhost:4444/users/')
        .then(response => {
          this.users = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    updateUser(id) {
      this.$router.push(`/updateUser/${id}`)
    },
    deleteUser(id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          axios.delete(`http://localhost:4444/users/${id}`)
            .then(response => {
              console.log(response)
              this.get()
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            })
            .catch(error => {
              console.log(error)
            })
        }
      })
    }


  }

  // data() {
  //   return {
  //     users: this.$store.state.users,
  //   };
  // },
  //
  // methods: {
  //   updateUser(id) {
  //     this.$router.push(`/updateUser/${id}`)
  //   },
  //   get() {
  //     axios.get("http://localhost:4444/users/").then((result) => {
  //       console.log('fdfdfdff', result.data);
  //       this.users = result.data;
  //     })
  //
  //   },
  //   deleteUser(id) {
  //     Swal.fire({
  //         title: 'Are you sure?',
  //         text: "You won't be able to revert this!",
  //         icon: 'warning',
  //         showCancelButton: true,
  //         confirmButtonColor: '#3085d6',
  //         cancelButtonColor: '#d33',
  //         confirmButtonText: 'Yes, delete it!'
  //       }
  //     ).then((result) => {
  //       if (result.value) {
  //         axios.delete(`http://localhost:4444/users/${id}`).then((result) => {
  //           this.get()
  //         })
  //         Swal.fire(
  //           'Deleted!',
  //           'Your file has been deleted.',
  //           'success'
  //         )
  //       }
  //     })
  //   },
  //   editUser(id) {
  //     this.$router.push(`/editUser/${id}`)
  //   },
  //   pagination() {
  //     console.log('pagination');
  //   }
  // }
}
</script>

<style>

</style>
