<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" sticky="true" expand>
            <router-link :to="{ name: 'home'}" slot="brand" class="navbar-brand mr-lg-5">
                <img src="#">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <router-link :to="{ name: 'home'}">
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
                        <router-link :to="{ name: 'events'}" class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-default rounded-circle text-white">
                                <i class="ni ni-world"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-default mb-md-1">Events</h6>
                                <p class="description d-none d-md-inline-block mb-0">Find an event near you.</p>
                            </div>
                        </router-link>

                        <router-link :to="{ name: 'movies'}" class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-default rounded-circle text-white">
                                <i class="ni ni-tv-2"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-default mb-md-1">Movies</h5>
                                <p class="description d-none d-md-inline-block mb-0">See what's showing in the cinemas.</p>
                            </div>
                        </router-link>
                    </div>
                </base-dropdown>
                
                <router-link :to="{ name: 'how-it-works'}" class="nav-link">
                    <span class="nav-link-inner--text">How It Works</span>
                </router-link>

                <router-link :to="{ name: 'about'}" class="nav-link">
                    <span class="nav-link-inner--text">About</span>
                </router-link>

                <router-link :to="{ name: 'faqs'}" class="nav-link">
                    <span class="nav-link-inner--text">FAQs</span>
                </router-link>
            </ul>

            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item d-none d-lg-block ml-lg-4">
                    
                    <div v-if="$route.name == 'home'">
                        <router-link :to="{ name: 'home'}" class="btn btn-outline-secondary">
                            <span class="nav-link-inner--text">Create An Event</span>
                        </router-link>
                    </div>
                </li>
                <li class="nav-item d-none d-lg-block ml-lg-4">
                    <div v-if="$route.name != 'sign-in'">
                        <router-link :to="{ name: 'sign-in'}" class="btn btn-secondary">
                            <span class="nav-link-inner--text">Sign In</span>
                        </router-link>
                    </div>
                    <div v-else>
                        <router-link :to="{ name: 'register'}" class="btn btn-secondary">
                            <span class="nav-link-inner--text">Sign Up</span>
                        </router-link>
                    </div>
                </li>
                <b-nav-item-dropdown right>
                    <!-- Using button-content slot -->
                    <template slot="button-content">
                        User
                    </template>
                    <b-dropdown-item href="#">Profile</b-dropdown-item>
                    <b-dropdown-item href="#">Signout</b-dropdown-item>
                </b-nav-item-dropdown>
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
