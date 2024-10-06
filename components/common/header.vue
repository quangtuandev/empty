<template>
  <div class="the-header" :class="{ 'sticky': isSticky }">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand d-md-none logo__mobile" href="#">
          <img class="mascot-border" src="~/assets/images/logo.svg" alt="" srcset="" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="icon-menu"></span>

        </button>
        <div class="collapse navbar-collapse justify-content-between align-items-center" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0 mt-5 mt-md-0">
            <li class="nav-item">
              <nuxt-link to="/" class="nav-link">Product</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/contact">Contact</nuxt-link>
            </li>
          </ul>
          <p class="d-block d-md-none term">Papa Viet Phở - A product by Viet Uc Food & Co</p>
          <a class="navbar-brand d-none d-md-block" href="#">
            <img class="mascot-border" src="~/assets/images/logo.svg" alt="" srcset="" />
          </a>
          <form class="d-none d-md-flex">
            <button type="button" class="btn button-primary me-2">
              Buy Now
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>

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
<style lang="scss" scoped>
@mixin button-primary() {
  font-family: 'iCielBCPortico-Regular';
  font-weight: 400;
  text-transform: uppercase;
  color: #FFFFFF;
  background: #8A724A;
  padding: 8px 32px;
  border-radius: 56px;
  border: none;
  cursor: pointer;

  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  text-align: center;

  &:hover {
    color: #E4D3B0;
    background: #801619;
    transform: all .3s ease;
  }
}

.the-header {
  background: linear-gradient(180deg, #0D0D0D 0%, rgba(13, 13, 13, 0.64) 56.76%, rgba(13, 13, 13, 0) 100%);
  transition: background 0.3s ease;
  z-index: 1000;

  .term {
    font-family: AveriaSerifLibre-Regular;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
    color: #CCCCCC;
    margin-top: 50px;
  }

  &.sticky {
    position: sticky;
    top: 0;
    background: #0D0D0D;
  }

  .navbar-toggler {
    color: #E4D3B0;
    font-size: 32px;

    &:focus {
      outline: none;
      box-shadow: none;
    }

    &[aria-expanded="true"] {
      .icon-menu {
        &::before {
          content: "\e902";
        }
      }
    }
  }

  .logo__mobile {
    img {
      max-height: 44px;
    }
  }

  @media screen and (max-width: 768px) {
    .navbar-collapse {
      position: absolute;
      left: 0;
      right: 0;
      top: 70px;
      background-color: #0D0D0DF5;
      backdrop-filter: blur(12px);
      // min-height: 340px;
    }

    .navbar-nav {
      gap: 40px;
    }
  }

  .button-primary {
    @include button-primary();
  }

  .btn-link {
    font-family: 'iCielBCPortico-Regular';
    text-decoration: none;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    text-align: center;
    color: #FFFFFF;
  }

  .navbar-expand-lg .navbar-nav .nav-link {
    font-family: 'iCielBCPortico-Regular';
    color: #443F35;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    text-align: center;
    position: relative;

    &:hover {
      color: #E4D3B0;

      &::after {
        clip-path: polygon(11% 100%, 0 100%, 0 0, 54% 0, 100% 0, 100% 85%, 92% 74%, 74% 100%, 74% 100%, 52% 99%, 40% 75%, 22% 72%);
        content: '';
        height: 6px;
        left: 8px;
        width: calc(100% - 16px);
        position: absolute;
        background: #E4D3B0;
        top: -22px;

        @media screen and (max-width: 768px) {
          display: none;
        }
      }
    }

    &.router-link-active {
      color: #E4D3B0;

      &::after {
        clip-path: polygon(11% 100%, 0 100%, 0 0, 54% 0, 100% 0, 100% 85%, 92% 74%, 74% 100%, 74% 100%, 52% 99%, 40% 75%, 22% 72%);
        content: '';
        height: 6px;
        left: 8px;
        width: calc(100% - 16px);
        position: absolute;
        background: #E4D3B0;
        top: -22px;

        @media screen and (max-width: 768px) {
          display: none;
        }
      }
    }
  }
}
</style>
