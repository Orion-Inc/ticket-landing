import Vue from "vue";
import Router from "vue-router";

import AppHeader from "./layout/AppHeader";
import AppHeaderAlt from "./layout/AppHeaderAlt";
import AppFooter from "./layout/AppFooter";
import AppFooterAlt from "./layout/AppFooterAlt";

import Landing from "./views/Landing/Landing.vue";
import Home from "./views/Landing/Home.vue";
import About from "./views/Landing/About.vue";
import Process from "./views/Landing/Process.vue";
import Contact from "./views/Landing/Contact.vue";
import Faqs from "./views/Landing/Faqs.vue";
import Privacy from "./views/Landing/Privacy.vue";

import Discover from "./views/Discover/Discover";
import Event from "./views/Discover/Event.vue";
import Events from "./views/Discover/Events.vue";
import Movie from "./views/Discover/Movie.vue";
import Movies from "./views/Discover/Movies.vue";

import Auth from "./views/Auth/Auth";
import Login from "./views/Auth/Login.vue";
import Register from "./views/Auth/Register.vue";
import ForgotPassword from "./views/Auth/ForgotPassword.vue";

Vue.use(Router);

const routes = new Router({
  routes: [
    {
      path: "/",
      component: Landing,
      children: [
        {
          path: "/",
          name: "home",
          components: {
            header: AppHeader,
            default: Home,
            footer: AppFooter
          }
        },
        {
          path: "about",
          name: "about",
          components: {
            header: AppHeaderAlt,
            default: About,
            footer: AppFooter
          }
        },
        {
          path: "how-it-works",
          name: "how-it-works",
          components: {
            header: AppHeader,
            default: Process,
            footer: AppFooter
          }
        },
        {
          path: "contact",
          name: "contact",
          components: {
            header: AppHeaderAlt,
            default: Contact,
            footer: AppFooterAlt
          }
        },
        {
          path: "faqs",
          name: "faqs",
          components: {
            header: AppHeaderAlt,
            default: Faqs,
            footer: AppFooterAlt
          }
        },
        {
          path: "privacy-policy",
          name: "privacy-policy",
          components: {
            header: AppHeaderAlt,
            default: Privacy,
            footer: AppFooterAlt
          }
        }
      ]
    },
    {
      path: "/auth",
      component: Auth,
      children: [
        {
          path: "sign-in",
          name: "sign-in",
          components: {
            header: AppHeader,
            default: Login,
            footer: AppFooter
          }
        },
        {
          path: "register",
          name: "register",
          components: {
            header: AppHeader,
            default: Register,
            footer: AppFooter
          }
        },
        {
          path: "forgot-password",
          name: "forgot-password",
          components: {
            header: AppHeader,
            default: ForgotPassword,
            footer: AppFooter
          }
        }
      ]
    },
    {
      path: "/discover",
      component: Discover,
      children: [
        {
          path: "events",
          name: "events",
          components: {
            header: AppHeaderAlt,
            default: Events,
            footer: AppFooterAlt
          }
        },
        {
          path: "events/:id",
          name: "event",
          components: {
            header: AppHeader,
            default: Event,
            footer: AppFooter
          }
        },
        {
          path: "movies",
          name: "movies",
          components: {
            header: AppHeaderAlt,
            default: Movies,
            footer: AppFooterAlt
          }
        },
        {
          path: "movies/:id",
          name: "movie",
          components: {
            header: AppHeader,
            default: Movie,
            footer: AppFooter
          }
        }
      ]
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  mode: "history"
});

export default routes;
