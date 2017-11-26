<!-- src/components/Login.vue -->

<template>
    <div class="col-sm-4 col-sm-offset-4">
        <h2>Log In</h2>
        <p>Log in to your account to get some great quotes.</p>
        <form :model="dynamicValidateForm" ref="dynamicValidateForm">
            <div class="form-group">
                <input
                        type="text"
                        class="form-control"
                        placeholder="Enter your email"
                        v-model="dynamicValidateForm.email"
                        rules="rules.email"
                >
            </div>
            <div class="form-group">
                <input
                        type="password"
                        class="form-control"
                        placeholder="Enter your password"
                        v-model="dynamicValidateForm.password"
                        rules="rules.password"
                >
            </div>
            <button class="btn btn-primary" @click="submitForm('dynamicValidateForm')">Access</button>
            <button class="btn btn-primary" @click="resetForm()">Reset form</button>
        </form>
    </div>
</template>

<script>
    import loginService from '../../../services/login-service'

    export default {
        name: 'login',
        data() {
            console.log("login component");
            return {
                dynamicValidateForm: {
                    email: '',
                    password: ''
                },
                activeName: this.$store.state.activeName,
                rules: {
                    email: [{
                        required: true,
                        message: 'Enter email',
                        trigger: 'blur'
                    },
                        {
                            type: 'email',
                            message: 'Must be type of email',
                            trigger: 'blur'
                        }
                    ],
                    password: {
                        required: true,
                        message: 'Is required',
                        trigger: 'blur'
                    }
                }
            }
        },
        methods: {
            resetForm() {
                this.dynamicValidateForm.email = '';
                this.dynamicValidateForm.password = '';
            },
            submitForm(formName) {
                let opt = this.dynamicValidateForm;

                loginService.UserLogin(opt).then(
                    ({
                         data,
                         status
                    }) => {
                    if (status !== 200) {
                        console.log("error");
                    }
                    if (status === 200 && data !== null) {
                        this.$store.dispatch('UserLogin', data);

                        let redirect = decodeURIComponent(this.$route.query.redirect || '/');

                        this.$router.push({
                            path: redirect
                        });
                    } else {
                        console.log("Error");
                    }
                });
            }
        }
    }
</script>