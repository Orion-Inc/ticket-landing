<template>
    <section class="section section-shaped section-lg my-0 bg-gradient-default">
        <div class="container pt-lg-md">
            <div class="row justify-content-center mb-5">
                <div class="col-lg-5">
                    <card type="secondary" shadow header-classes="bg-white pb-5" class="border-0 mt-5">
                        <template>
                            <div class="text-center text-muted mb-4">
                                <h4>Forgot Password</h4>
                            </div>
                            <form role="form">
                                <base-input class="mb-3" placeholder="Email" addon-left-icon="ni ni-email-83"></base-input>
                                <div class="text-center">
                                    <base-button type="primary" class="my-4" block>Send Email</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                    <div class="row mt-5 mb-5">
                        <div class="col-12 text-center">
                            <small>Remember Password? </small>
                            <router-link to="/sign-in" class="text-light">
                                <small>Sign In</small>
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
