<script setup>
const logos = [
    {
        src: '/assets/pages/home/papaviet/logo-01.png',
    },
    {
        src: '/assets/pages/home/papaviet/logo-02.png',
    },
    {
        src: '/assets/pages/home/papaviet/logo-03.png',
    },
    {
        src: '/assets/pages/home/papaviet/logo-04.png',
    },
    {
        src: '/assets/pages/home/papaviet/logo-05.png',
    }
]
</script>
<template>
    <section class="sc-papaviet" data-aos="fade-up">
        <div class="container">

            <div class="box">
                <div class="box__left">
                    <div class="sc-header">
                        <h2 class="sc-header__title">PHỞ <br class="d-none d-xl-block" />PAPA VIET</h2>
                        <div class="sc-header__sub mb-0">FROM VIETNAM TO YOUR TABLE, READY IN MINUTES
                        </div>
                    </div>
                </div>
                <div class="box__right">
                    <div class="right__item">
                        <p>CertIfIcate:</p>
                        <img src="/public/assets/pages/home/papaviet/fssc.svg" alt="">
                    </div>
                    <div class="right__item">
                        <p>CLAIM LOGO:</p>
                        <div class="box__logos">
                            <img v-for="logo in logos" :src="logo.src" alt="">
                        </div>
                    </div>
                </div>

                <div class="box__thumb d-xl-none">
                    <img src="/public/assets/pages/home/papaviet/banner.png" alt="">
                </div>

            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.sc-papaviet {
    @media (min-width: 1200px) {
        padding-top: 30px;
    }

    @media (max-width: 1199px) {
        .sc-header {
            text-align: center;
        }
    }
}

.box {
    display: flex;
    justify-content: space-between;
    padding: 80px 44px 44px;
    height: 436px;
    background: url('/assets/pages/home/papaviet/bg.png') no-repeat bottom;
    background-size: contain;

    &__left {
        width: 318px;

        .sc-header {
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: space-between;
        }
    }

    &__right {
        width: 268px;

        .right__item {
            margin-bottom: 34px;
        }

        p {
            margin-bottom: 10px;
            font-family: 'iCielBCPortico-Regular';
            font-size: 20px;
            line-height: 30px;
            color: #8A724A;
        }
    }

    &__logos {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

    @media (max-width: 1199px) {
        height: auto;
        padding: 16px 0 0;
        flex-direction: column;
        background: #1F1F1F66;
        backdrop-filter: blur(4px);

        .box__left {
            margin-bottom: 50px;
            width: 100%;
            padding: 0 16px;
        }

        .box__right {
            width: 100%;
            padding: 0 16px;
            p {
                margin-bottom: 12px;
                font-size: 14px;
                line-height: 20px;
            }

            .box__right .right__item {
                margin-bottom: 20px;
            }
        }
                .box__logos {
            gap: 15px;
            img {
                max-width: 50px;
                object-fit: contain;
            }
        }

    }
}
</style>