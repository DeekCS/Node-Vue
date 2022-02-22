<template>
    <!--show all users from api   -->
    <div class="">
       <h1>Users</h1>
        <ul>
          <li v-for="user in users" :key="user.id">
           userName: {{user.username}} <br>
           Name: {{user.name}} <br>
           Age: {{user.phone}} <br>
           Phone: {{user.phone}} <br>
          </li>
        </ul>
      <CreateUser />
    </div>
</template>

<script>
import axios from 'axios'
export default {
  // created() {
  //   axios.get('http://localhost:8000/api/users')
  //     .then(response => {
  //       this.users = response.data
  //     })
  //     .catch(e => {
  //       console.log(e)
  //     })
  // }
  // },
  computed:{
    get() {
      axios.get("http://localhost:4444/users/").then((result)=>{
        console.log('fdfdfdff',result.data);
        this.users = result.data;
      })

    }
  },

  data() {
    return {
      users: this.$store.state.users,
    };
  },
}
</script>

<style>

</style>
