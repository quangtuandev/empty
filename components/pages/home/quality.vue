<script setup>
const items = [
    {
        image: "/assets/pages/home/quality/item-01.png",
        title: 'Farm-to-Table PhIlosophy',
        content: 'Papa Việt believes in a farm-to-table philosophy, using using high-quality, locally sourced ingredients to offer natural, preservative-free ingredients. Every bowl of Papa Việt’s Phở is as healthy as it is delicious.'
    },
    {
        image: '/assets/pages/home/quality/item-03.png',
        title: 'Natural IngredIents',
        content: 'Papa Việt select premium Australian beef, locally sourced traditional spices, and rice noodles made from Vietnamese-grown rice and traditional spices that capture the essence of a freshly prepared bowl of Phở.'
    },
    {
        image: '/assets/pages/home/quality/item-02.png',
        title: 'Advanced Freeze-DryIng',
        content: 'Freeze-drying technology plays a key role in maintaining the integrity of our product. By freezing and removing moisture under vacuum, we lock in the rich flavors and nutrients while extending shelf life without artificial preservatives.'
    },
    {
        image: '/assets/pages/home/quality/item-04.png',
        title: 'Enhanced Safety',
        content: 'Production process adheres to strict safety and quality standards, ensuring that each package meets the highest hygiene and quality benchmarks.'
    },
];
const firstTwoItems = computed(() => items.slice(0, 2)); // 2 item đầu
const lastTwoItems = computed(() => items.slice(-2)); // 2 item cuối
const allItems = computed(() => items); // Tất cả item (cho mobile)
</script>
<template>
    <section class="sc-quality">
        <div class="container">
            <div class="sc-header text-center" data-aos="fade-up">
                <h2 class="sc-header__title">QUALITY AND SAFETY</h2>
                <div class="sc-header__sub">BRINGING THE AUTHENTIC FLAVORS OF VIETNAM INTO EVERY HOME</div>
            </div>
            <div class="position-relative" data-aos="fade-up">
                <div class="boxs">
                    <div class="boxs__item">
                        <div v-for="(item, index) in firstTwoItems" :key="index" class="item text-xl-end">
                            <div class="item__header">
                                <div class="item__thumb">
                                    <img :src="item.image" :alt="item.title">
                                </div>
                                <h3 class="item__title">{{ item.title }}</h3>
                            </div>
                            <div class="item__content">
                                {{ item.content }}
                            </div>
                        </div>
                    </div>
                    <div class="boxs__banner d-none d-xl-block">
                        <img src="/public/assets/pages/home/quality/banner.png" alt="">
                    </div>
                    <div class="boxs__item">
                        <div v-for="(item, index) in lastTwoItems" :key="index" class="item">
                            <div class="item__header">
                                <div class="item__thumb">
                                    <img :src="item.image" :alt="item.title">
                                </div>
                                <h3 class="item__title">{{ item.title }}</h3>
                            </div>
                            <div class="item__content">
                                {{ item.content }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="boxs__banner d-xl-none">
                    <img src="/public/assets/pages/home/quality/banner.png" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.sc-quality {
    @media (min-width: 1200px) {
        padding-top: 20px;

        .sc-header {
            margin-bottom: 32px;
        }

        .col-md-3 {
            max-width: 25%;
        }
    }
}




.boxs {
    position: relative;
    display: grid;
    grid-template-columns: 293px 1fr 293px;
    align-items: center;

    .item {
        margin-bottom: 56px;

        &__header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 12px;
        }

        &__title {
            margin-bottom: 0;
            font-family: 'iCielBCPortico-Regular';
            font-size: 16px;
            line-height: 24px;
            color: #E6CC9B;
        }

        &__thumb {
            width: 44px;
            height: 44px;

            img {
                object-fit: contain;
            }
        }

        &:nth-child(1) {
            padding-top: 28px;
        }

        &:nth-child(2) {
            .item__title {
                font-size: 20px;
                line-height: 30px;
            }
        }
    }
}

@media (max-width: 1199px) {
    .boxs {
        display: flex;
        gap: 20px;
        padding-top: 138px;
        overflow: auto;
        margin-left: -12px;
        margin-right: -12px;
        padding-left:12px;
        padding-right:12px;

        &::-webkit-scrollbar {
            display: none;
        }


        &__banner {
            position: absolute;
            top: -20px;
            left: 50%;
            transform: translateX(-50%);
            width: 238px;
        }

        &__item {
            display: flex;
            gap: 20px;

        }

        .item {
            margin-bottom: 0;
            width: 266px;
            padding: 16px !important;
            border-radius: 4px;
            background: #292929CC;

            &__header {
                margin-bottom: 16px;
                display: block;
            }

            &__thumb {
                margin-bottom: 16px;
            }

            &__title {
                font-size: 14px !important;
                line-height: 20px !important;
            }
        }
    }
}
</style>