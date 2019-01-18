<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0 bg-gradient-default">
            
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row row-grid align-items-center">
                            <div class="col-md-6 order-md-2 pt-5">
                                <div class="rounded shadow-lg overflow-hidden">
                                    <b-carousel id="carousel1"
                                                controls
                                                indicators>
                                        <!-- Text slides with image -->
                                        <b-carousel-slide img-src="../../img/theme/img-1-1200x1000.jpg"></b-carousel-slide>
                                        <b-carousel-slide img-src="../../img/theme/img-2-1200x1000.jpg"></b-carousel-slide>
                                    </b-carousel>
                                </div>
                            </div>
                            <div class="col-md-6 order-md-1">
                                <div class="pr-md-5 pt-5">
                                    <h3>Movie Name</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nisi deserunt corrupti, delectus atque saepe quis aliquam iste quo laborum optio a eveniet aut autem impedit fugit, totam dolore fugiat.</p>
                                    <a href="">Watch Trailer</a>
                                    <ul class="list-unstyled mt-3">
                                        <li class="py-2">
                                            <div class="d-flex align-items-center">
                                                <div>
                                                    <div class="badge badge-circle badge-success mr-3">
                                                        <i class="ni ni-settings-gear-65"></i>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h6 class="mb-0">Cast</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="py-2">
                                            <div class="d-flex align-items-center">
                                                <div>
                                                    <div class="badge badge-circle badge-success mr-3">
                                                        <i class="ni ni-html5"></i>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h6 class="mb-0">Director</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="py-2">
                                            <div class="d-flex align-items-center">
                                                <div>
                                                    <div class="badge badge-circle badge-success mr-3">
                                                        <i class="ni ni-satisfied"></i>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h6 class="mb-0">Runtime</h6>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <a href="#">Buy Ticket</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
import BCarousel from "bootstrap-vue/es/components/carousel/carousel";
import BCarouselSlide from "bootstrap-vue/es/components/carousel/carousel-slide";

export default {
    components: {
        BCarousel,
        BCarouselSlide
    }
};
</script>
<style>
</style>
