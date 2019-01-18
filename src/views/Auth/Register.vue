<template>
    <section class="section section-shaped section-lg my-0 bg-gradient-default">
        <div class="container pt-lg-md">
            <div class="row ">
                <div class="offset-lg-1 col-lg-5">
                    <div class="pr-md-5 pt-5 text-white">
                        <h3 class="display-3 text-white">Awesome features</h3>
                        <p>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go.</p>
                        <ul class="list-unstyled mt-5">
                            <li class="py-2">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <div class="badge badge-circle badge-secondary mr-3">
                                            <i class="ni ni-settings-gear-65"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 class="mb-0 text-white">Carefully crafted components</h6>
                                    </div>
                                </div>
                            </li>
                            <li class="py-2">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <div class="badge badge-circle badge-secondary mr-3">
                                            <i class="ni ni-html5"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 class="mb-0 text-white">Amazing page examples</h6>
                                    </div>
                                </div>
                            </li>
                            <li class="py-2">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <div class="badge badge-circle badge-secondary mr-3">
                                            <i class="ni ni-satisfied"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 class="mb-0 text-white">Super friendly support team</h6>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="offset-lg-1 col-lg-5">
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
                                    <base-button type="default" block class="my-4">Create account</base-button>
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
