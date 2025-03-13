<template>
    <div class="footer__top" v-if="isFull">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <nuxt-link to="/" class="footer__logo">
                        <img class="mascot-border" src="~/assets/images/logo-footer.svg" alt="Logo" />
                    </nuxt-link>
                    <div class="footer__desc">A product by Viet Uc Food & Co</div>
                </div>
                <div class="col-md-6">
                    <div class="footer__top-right">
                        <div class="item">
                            <div class="item__title">Address:</div>
                            <div>107 Cù Lao St, Wrd 2, Phu Nhuan Dist, Ho Chi Minh City, Viet Nam</div>
                        </div>
                        <div class="box">
                            <div class="item">
                                <div class="item__title">Email:</div>
                                <a href="mailto:vietuc@gmail.com">vietuc@gmail.com</a>
                            </div>
                            <div class="item">
                                <div class="item__title">Hotline:</div>
                                <a href="tel:+1 514-525-2433">+1 514-525-2433</a>
                            </div>
                            <div class="item">
                                <div class="item__title">Follow us</div>
                                <div class="item__group">
                                    <a href="#">
                                        <i class="icon-instagram"></i>
                                    </a>
                                    <a href="#">
                                        <i class="icon-facebook"></i>
                                    </a>
                                    <a href="#">
                                        <i class="icon-tiktok"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div class="footer coypy-right">
        <p class="mb-0 py-3 text-center">Copyright © 2010-2024 <a href="https://mayday-creative.com">Mayday
                Creative</a>. All rights reserved</p>
    </div>
    <CommonFloatingSocical />
</template>
<script setup>

defineProps({
    isFull: {
        type: Boolean,
        default: false,
    },
});
</script>
<style lang="scss" scoped>
.box {
    display: flex;
    gap: 0 32px;
    flex-wrap: wrap;
}

.item {
    &__title {
        margin-bottom: 4px;
        font-weight: 700;
        color: #8A724A;
    }

    &__group {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        font-size: 24px;
    }
}

.footer {
    background: #0D0D0D;

    border-top: 1px solid #292929;

    p {
        line-height: 20px;
        text-align: center;
        color: #A3A3A3;
    }

    &__top {
        padding: 40px 0;
        background: #0D0D0D;
        &-right {
            max-width: 428px;
            margin-left: auto;
        }
    }

    &__logo {
        display: block;
        margin-bottom: 22px;
    }
    @media (max-width: 1199px) {
        .coypy-right {
            font-size: 12px;
            line-height: 18px;
        }
        &__top {
            padding: 24px 0;
            &-right {
                .item {
                    // margin-bottom: 20px;
                }
                .box {
                    margin-top: 20px;
                    gap: 20px;
                    justify-content: space-between;
                    .item:first-child {
                        width: 100%;
                    }
                }
            }
        }

        &__logo {
            margin-bottom: 12px;
        }
        &__desc {
            margin-bottom: 20px;
        }

        .box {
    gap: 20px;
}
        
    }
}
</style>