<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link to="/" slot="brand" class="navbar-brand mr-lg-5">
                <img src="#">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <router-link to="/">
                        <img src="#">
                    </router-link>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <span class="nav-link-inner--text">Discover</span>
                    </a>
                    <div class="dropdown-menu-inner">
                        <a href="#" class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                <i class="ni ni-world"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1">Events</h6>
                                <p class="description d-none d-md-inline-block mb-0"></p>
                            </div>
                        </a>
                        <a href="#" class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                <i class="ni ni-tv-2"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-primary mb-md-1">Movies</h5>
                                <p class="description d-none d-md-inline-block mb-0"></p>
                            </div>
                        </a>
                    </div>
                </base-dropdown>
                
            </ul>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center ml-lg-auto">
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">How We Work</span>
                    </a>
                    <!-- <router-link to="" class="dropdown-item">Landing</router-link> -->
                    
                </base-dropdown>
                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <div v-if="$route.name != 'sign-in'">
                        <router-link to="/sign-in" class="btn btn-neutral">
                            <span class="nav-link-inner--text">Sign In</span>
                        </router-link>
                    </div>
                    <div v-else>
                        <router-link to="/register" class="btn btn-neutral">
                            <span class="nav-link-inner--text">Sign Up</span>
                        </router-link>
                    </div>
                </li>
            </ul>
        </base-nav>
    </header>
</template>

<script>
    import BaseNav from "@/components/BaseNav";
    import BaseDropdown from "@/components/BaseDropdown";
    import CloseButton from "@/components/CloseButton";

    export default {
        components: {
            BaseNav,
            CloseButton,
            BaseDropdown
        }
    };
</script>
<style>
</style>
