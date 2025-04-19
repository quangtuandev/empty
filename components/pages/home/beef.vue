<script setup>
const items = [
    {
        image: '/assets/pages/home/beef/item-01.png',
        title: 'Phở spices',
    },
    {
        image: '/assets/pages/home/beef/item-02.png',
        title: 'Australian beef',
    },
    {
        image: '/assets/pages/home/beef/item-03.png',
        title: 'Beef bone',
    },
    {
        image: '/assets/pages/home/beef/item-04.png',
        title: 'Phở',
    },
    {
        image: '/assets/pages/home/beef/item-05.png',
        title: 'Herbs',
    },
]
</script>
<template>
    <section class="sc-beef">
        <div class="container">
            <div class="content">

                <div class="content__right order-xl-2" data-aos="fade-left">
                    <div class="sc-header">
                        <div class="sc-header__sub">PAPA VIET’s Product</div>
                        <h2 class="sc-header__title">VIETNAMESE <br class="d-xl-none" />BEEF PHỞ</h2>
                        <div class="sc-header__excerpt">
                            Papa Việt select premium Australian beef, locally sourced traditional spices, and rice
                            noodles
                            made from Vietnamese-grown rice and traditional spices that capture the essence of a freshly
                            prepared bowl of Phở.
                        </div>
                    </div>

                    <div class="box d-none d-xl-flex" data-aos="fade-up">
                        <div v-for="(item, index) in items" :key="index" class="item">
                            <div class="item__header">
                                <div class="item__thumb mx-auto">
                                    <img :src="item.image" :alt="item.title">
                                </div>
                                <div class="item__title">{{ item.title }}</div>
                            </div>
                        </div>
                        <a href="#" class="box__link">
                            <img src="/assets/images/icon-beef-arrow.svg" alt="">
                        </a>
                    </div>

                </div>
                <div class="content__thumb" data-aos="fade-right">
                    <picture>
                        <source media="(min-width: 1200px)" srcset="/public/assets/pages/home/beef/banner.png">
                        <img src="/public/assets/pages/home/beef/banner-mb.png" alt="">
                    </picture>
                </div>

                <div class="beef__buttons d-xl-none">
                    <button type="button" class="btn btn-primary"> Buy Now </button>
                    <a href="#" class="btn btn-primary-outline">
                        <img src="/public/assets/pages/icon-cirlce-right.svg" alt="">
                        <span>Chi tiết </span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.sc-header {
    margin-bottom: 32px;

    &__sub {
        margin-bottom: 12px;
    }

    &__title {
        margin-bottom: 28px;
    }

    @media (max-width: 1199px) {
        margin-bottom: 0;
        text-align: center;

        &__title {
            margin-bottom: 20px;
            line-height: 40px;
        }

        &__sub {
            margin-bottom: 4px;
        }
    }
}

.content {
    display: grid;
    grid-template-columns: 430px 1fr;
    gap: 75px;

    &__right {
        padding-top: 24px;
    }

    @media (max-width: 1199px) {
        grid-template-columns: 1fr;
        gap: 14px;
        .beef__buttons {
            display: flex;
            justify-content: center;
            gap: 12px;
        }
    }
}

.box {
    position: relative;
    display: flex;
    align-items: center;
    gap: 36px;
    padding: 32px;
    border: 1px solid #525252;
    background: #29292980;
    border-radius: 24px;
    overflow: hidden;

    .item {
        text-align: center;

        &__thumb {
            width: 64px;
            height: 64px;
            object-fit: contain;
        }
    }

    &__link {
        position: absolute;
        top: 0;
        right: 0;
        width: 40px;
        height: 40px;
        object-fit: contain;
        &:hover {
            filter: brightness(1.05);
        }
    }
}
</style>