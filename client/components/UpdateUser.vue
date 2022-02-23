<template>
<!--  form to update a user from an api using Vuetify -->
<v-form v-model="valid" ref="form" @submit.prevent="updateUser">
    <v-text-field v-model="user.username" label="Name" :rules="usernameRules" required></v-text-field>
    <v-text-field v-model="user.name" label="Name" :rules="nameRules" required></v-text-field>
    <v-text-field v-model="user.age" label="Age" :rules="ageRules" required></v-text-field>
    <v-text-field v-model="user.phone" label="Phone" :rules="phoneRules" required></v-text-field>
    <v-btn type="submit" color="primary" :disabled="!valid">Update</v-btn>
</v-form>
</template>


<script>
export default {
    name: 'UpdateUser',
    data() {
        return {
            user: {
                username: '',
                name: '',
                age: '',
                phone: ''
            },
            valid: false,
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 50 || 'Name must be less than 50 characters'
            ],
            usernameRules: [
                v => !!v || 'Username is required',
                v => v.length <= 50 || 'Username must be less than 50 characters'
            ],
            ageRules: [
                v => !!v || 'Age is required',
                v => v.length <= 3 || 'Age must be less than 3 characters'
            ],
            phoneRules: [
                v => !!v || 'Phone is required',
                v => v.length <= 10 || 'Phone must be less than 10 characters'
            ]
        }
    },
    methods: {
        updateUser() {
            this.$refs.form.validate()
            if (this.valid) {
                this.$store.dispatch('updateUser', this.user)
                this.$router.push('/')
            }
        }
    },
    created() {
        this.user = this.$route.params.user
    }

}
</script>


<style>

</style>
