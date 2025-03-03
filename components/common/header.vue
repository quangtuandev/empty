<template>
  <header class="header the-header" :class="{ 'sticky': isSticky }">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand d-lg-none logo__mobile" href="/">
          <img class="mascot-border" src="~/assets/images/logo.svg" alt="" srcset="" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="icon-menu"></span>

        </button>
        <div class="collapse navbar-collapse justify-content-between align-items-center" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0 mt-5 mt-md-0">
            <li class="nav-item">
              <nuxt-link to="/" class="nav-link">Products</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/contact">Contact</nuxt-link>
            </li>
          </ul>
          <p class="d-block d-lg-none term">Papa Viet Phở - A product by Viet Uc Food & Co</p>
          <a class="header__logo navbar-brand d-none d-lg-block" href="#">
            <img class="mascot-border" src="~/assets/images/logo.svg" alt="" srcset="" />
          </a>
          <form class="d-none d-lg-flex justify-content-end">
            <button type="button" class="btn button-primary">
              Buy Now
            </button>
          </form>
        </div>
      </div>
    </nav>
  </header>

</template>
<script setup lang="ts">
const isSticky = ref(false);
onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
      isSticky.value = true;
    } else {
      isSticky.value = false;
    }
  });
});
onDeactivated(() => {
  window.removeEventListener('scroll', () => {
    if (window.scrollY > 20) {
      isSticky.value = true;
    } else {
      isSticky.value = false;
    }
  });
});
</script>