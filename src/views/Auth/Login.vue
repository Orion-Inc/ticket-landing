<template>
    <section class="section section-shaped section-lg my-0 bg-gradient-default">
        <div class="container pt-lg-md">
            <div class="row justify-content-center mb-5">
                <div class="col-lg-5">
                    <card type="secondary" shadow header-classes="bg-white pb-5" class="border-0 ">
                        <template>
                            <div class="text-center text-muted mb-4">
                                <h4>Sign In</h4>
                            </div>
                            <form role="form">
                                <base-input class="mb-3" placeholder="Email" addon-left-icon="ni ni-single-02"></base-input>
                                <base-input type="password" placeholder="Password" addon-left-icon="ni ni-lock-circle-open"></base-input>
                                <div class="text-center">
                                    <base-button type="default" class="my-4" block>Sign In</base-button>
                                </div>
                            </form>
                        </template>
                        <!-- <template>
                            <div class="text-muted text-center mb-3">
                                <small>Or Sign In With</small>
                            </div>
                            <div class="btn-wrapper text-center">
                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/google.svg">
                                    Google
                                </base-button>

                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/facebook.svg">
                                    Facebook
                                </base-button>
                            </div>
                        </template> -->
                    </card>
                    <div class="row mt-4 mb-5">
                        <div class="col-6">
                            <router-link :to="{ name: 'forgot-password'}" class="text-light">
                                <small>Forgot password?</small>
                            </router-link>
                        </div>
                        <div class="col-6 text-right">
                            <router-link :to="{ name: 'register'}" class="text-light">
                                <small>Create new account</small>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {};
</script>
<style>
</style>
