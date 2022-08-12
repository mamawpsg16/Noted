<template lang="">
        <nav
          aria-label="main navigation"
          class="navbar is-success"
          role="navigation"
        >
            <div class="container is-max-desktop px-2">
                <div class="navbar-brand">
                    <div class="navbar-item is-size-4 is-family-monospace">
                        Noted
                    </div>
                   <a
                      @click.prevent="showMobileNav = !showMobileNav"
                      aria-expanded="false"
                      aria-label="menu"
                      :class="{ 'is-active' : showMobileNav }"
                      class="navbar-burger"
                      data-target="navbarBasicExample"
                      role="button"
                      ref="navbarBurgerRef"
                    >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

               <div
                  class="navbar-menu"
                  id="navbarBasicExample"
                  ref="navbarMenuRef"
                :class="{ 'is-active' : showMobileNav }"
                >
                    <div class="navbar-end">
                        <router-link @click="showMobileNav = false" to="/" class="navbar-item" active-class="is-active">
                        Note
                        </router-link>
                        <router-link @click="showMobileNav = false" to="/stats" class="navbar-item" active-class="is-active" >
                        Stats
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>
</template>
<script setup>
/** IMPORTS */
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

/** MOBILE NAV */
const showMobileNav   = ref(false)
const navbarBurgerRef = ref(false)

/** VUE USE CLICK OUTSIDE */
const navbarMenuRef = ref(null)
onClickOutside(navbarMenuRef, () => {
    showMobileNav.value = false
}, {
    ignore:[navbarBurgerRef]
})
</script>
<style>
@media (max-width :1023px){
    .navbar-menu{
        position:absolute;
        left:0;
        width:100%;
    }
}
</style>