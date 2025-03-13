<script setup>
const sliderData = [
    { image: '/assets/pages/home/herobanner/thumb-01.jpg' },
    { image: '/assets/pages/home/herobanner/thumb-01.jpg' },
    { image: '/assets/pages/home/herobanner/thumb-01.jpg' },
];
</script>
<template>
    <section class="herobanner">
        <div class="container">
            <div class="box-top" >
                <div class="row gx-xl-0">
                    <div class="col-md-6 order-md-2" data-aos="fade-left">
                        <div class="box-top__thumb">
                            <picture>
                                <source media="(max-width:1199px)"
                                    srcset="/public/assets/pages/home/herobanner/banner-mb.png" type="image/png" />
                                <img src="/public/assets/pages/home/herobanner/banner.png" alt="">
                            </picture>
                        </div>
                    </div>
                    <div class="col-md-6 herobanner__left" data-aos="fade-right">
                        <div class="sc-header sc-header-s1">
                            <h2 class="sc-header__title">PHỞ PAPA VIET</h2>
                            <div class="sc-header__sub">FROM VIETNAM TO YOUR TABLE, READY <br
                                    class="d-none d-xl-block" />IN MINUTES </div>
                            <div class="sc-header__excerpt">
                                Bringing the authentic taste of Vietnamese Phở to homes worldwide, Papa Việt offers a
                                premium instant experience that transforms quick meals into comforting, flavorful
                                moments.
                                The warmth of traditional Vietnamese phở, the bliss of savoring authentic cuisine, and a
                                quick fix for homesickness—that is Papa Việt’s gift to you, anytime you need it.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="box-bottom" data-aos="fade-up">
                <div class="sc-header__sub d-xl-none">BRINGING THE AUTHENTIC FLAVORS OF VIETNAM INTO EVERY HOME</div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="box-slider">
                            <CommonSwiper :slides="sliderData" :slidesPerView="1" :spaceBetween="20"
                                :autoplay="{ delay: 3000, disableOnInteraction: false }"
                                :pagination="{ clickable: true }">
                                <template #default="{ slide }">
                                    <div class="box-slider__item">
                                        <img :src="slide.image" :alt="slide.title" class="">
                                    </div>
                                </template>
                            </CommonSwiper>
                        </div>
                    </div>
                    <div class="col-md-6 d-flex align-items-center">
                        <div class="sc-header sc-header-s2">
                            <div class="sc-header__sub d-none d-xl-block">BRINGING THE AUTHENTIC FLAVORS OF VIETNAM INTO
                                EVERY HOME</div>
                            <div class="sc-header__excerpt">
                                Papa Việt offers a convenient yet uncompromised Phở experience that turns quick meals
                                into
                                something
                                special. Papa Việt serves two key audiences: international customers seeking authentic
                                Vietnamese cuisine
                                and busy professionals, students, and families who crave traditional flavors but lack
                                time
                                to prepare from
                                scratch.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.herobanner {
    padding-top: 60px;

    &__left {
        padding-top: 64px;
    }

    .sc-header-s1 {
        
        @media (min-width: 1200px) {
            max-width: 480px;
        }
        &__sub {
            margin-bottom: 32px;
        }
    }

    .box-top {
        margin-bottom: 24px;

        &__thumb {
            background: radial-gradient(50% 50% at 50% 50%, rgba(70, 70, 70, 0.24) 0%, rgba(20, 20, 20, 0) 100%);

        }
    }

    .box-slider {
        @media (min-width: 1200px) {
            max-width: 480px;
        }

        &__item {
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 12px;
            }
        }
    }

    @media (max-width: 767px) {
        --swiper-pagination-bottom: 30px;
        padding-top: 24px;

        &__left {
            padding-top: 20px;
        }

        .sc-header-s1 {
            text-align: center;
        }

        .box-top {
            margin-bottom: 64px;
        }

        .sc-header__sub {
            margin-bottom: 10px;
        }

        .sc-header-s2 {
            max-width: 91%;
            margin-left: auto;
            position: relative;
            z-index: 1;
            margin-top: -15px;
            background: #292929CC;
            padding: 10px;
            backdrop-filter: blur(4px);
            border-radius: 4px;
        }

        .box-slider {
            max-width: 85.4%;
            :deep(.swiper-pagination) {
                justify-content: flex-end;
                padding-right: 12px;
            }

            &__item img {
                border-radius: 4px;
            }
        }

    }

}
</style>