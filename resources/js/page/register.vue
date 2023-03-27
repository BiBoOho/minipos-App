<template>
    <div>
        <div class="row no-gutter">

            <!-- The image half -->
            <!-- The content half -->
            <div class="mx-auto mt-5 col-3 col-sm-6 col-md-6 col-xl-3">
                <div class="card">
                    <div class="card-body">
                        <div class="mb-5 d-flex">
                            <!-- <a href="index.html"><img src="assets/img/brand/favicon.png" class="sign-favicon-a ht-40"
                                    alt="logo">
                                <img src="assets/img/brand/favicon-white.png" class="sign-favicon-b ht-40" alt="logo">
                            </a> -->
                            <!-- <h1 class="main-logo1 ms-1 me-0 my-auto tx-28">Va<span>le</span>x</h1> -->
                        </div>
                        <div class="main-signup-header">
                            <h2 class="text-primary text-center">ລົງທະບຽນ</h2>
                            <div class="alert alert-solid-warning" role="alert" v-if="showError">
											<button aria-label="Close" class="close" data-bs-dismiss="alert" type="button">
												<span aria-hidden="true">×</span></button>
											<strong>Warning!</strong>  {{ textError }}
										</div>
                            <div class="form-group">
                                <label>ຊື່ຜູ້ໃຊ້ </label> <input class="form-control" placeholder="...." v-model="name" type="text">
                            </div>
                            <div class="form-group">
                                <label>ອີເມວ</label> <input class="form-control" placeholder="...."  v-model="email" type="email">
                            </div>
                            <div class="form-group">
                                <label>ລະຫັດຜ່ານ</label> <input class="form-control" placeholder="...." v-model="password" type="password">
                            </div>
                            <div class="form-group">
                                <label>ຢືນຢັນ ລະຫັດຜ່ານ</label> <input class="form-control" placeholder="...." v-model="password2"
                                    type="password">
                            </div>

                            <button class="btn btn-success btn-block" @click="Register()">ລົງທະບຽນ</button>

                            <div class="main-signup-footer mt-5">
                                <p>Already have an account? <a href="signin.html">Sign In</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="login d-flex align-items-center py-2">
            </div> <!-- End -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'MiniposAppRegister',

    data() {
        return {
            name: '',
            email: '',
            password: '',
            password2: '',
            showError: false,
            textError: ''
        };
    },

    mounted() {

    },

    methods: {
        Register() {
            if (this.name == '' || this.email == '' || this.password == '') {
                this.showError = true;
                this.textError = "ກະລຸນະປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ!";
            } else {
                this.showError = false;
                this.textError = "";

                if (this.password2 != '' && this.password == this.password2) {

                    this.$axios.post('api/register', {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                    }).then((response) => {
                        if (response.data.success) {
                            this.$router.push('login')
                        } else {
                            this.showError = true;
                            this.textError = response.data.message;
                        }
                    }).catch(function(error){
                        console.log(error);
                    });

                } else {
                    this.showError = true;
                    this.textError = "ລະຫັດຜ່ານບໍ່ກົງກັນ!";
                }
            }
        }
    },
};
</script>

<style lang="scss" scoped></style>