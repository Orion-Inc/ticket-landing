<template>
    <section class="section section-shaped section-lg my-0 bg-gradient-default">
        <div class="container pt-lg-md">
            <div class="row ">
                <div class="col-lg-5"></div>
                <div class="offset-lg-2 col-lg-5">
                    <card type="secondary" shadow header-classes="bg-white pb-5" class="border-0">
                        <template>
                            <div class="text-center text-muted mb-4">
                                <h4>Sign Up</h4>
                            </div>
                            <form role="form">
                                <base-input class="mb-3" placeholder="Full Name" addon-left-icon="ni ni-single-02"></base-input>
                                <base-input class="mb-3" placeholder="Email" addon-left-icon="ni ni-email-83"></base-input>
                                <base-input class="mb-3" placeholder="Phone" addon-left-icon="ni ni-mobile-button"></base-input>
                                <base-input type="password" placeholder="Password" addon-left-icon="ni ni-lock-circle-open"></base-input>
                                <base-checkbox>
                                    <span>I agree with the
                                        <a href="#">Privacy Policy</a>
                                    </span>
                                </base-checkbox>
                                <div class="text-center">
                                    <base-button type="primary" block class="my-4">Create account</base-button>
                                </div>
                            </form>
                        </template>
                        <!-- <template>
                            <div class="text-muted text-center mb-3">
                                <small>Or Sign Up With</small>
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
