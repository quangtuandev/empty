<template>
    <div class="product">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="row g-4">
                        <div v-for="(image, index) in productImages" :key="index" class="col-12">
                            <div class="product__item">
                                <div class="product__image-wrapper">
                                    <img :src="image" :alt="'Product ' + (index + 1)" @click="openModal(image)">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row my-4">
            <div class="col-12 text-center">
                <a href="/download/catalog.pdf" class="btn contact-form__btn" download>
                    DOWNLOAD CATALOG
                </a>
            </div>
        </div>
        <!-- Image Modal -->
        <div class="modal" :class="{ 'show': selectedImage }" @click="closeModal" @touchstart="handleTouchStart"
            @touchmove="handleTouchMove" @touchend="handleTouchEnd">
            <div class="modal__content" @click.stop>
                <img :src="selectedImage" v-if="selectedImage" class="modal__image">
                <button class="modal__close" @click="closeModal">&times;</button>
                <button class="modal__nav modal__nav--prev" @click="showPrevImage"
                    v-show="currentIndex > 0">&lt;</button>
                <button class="modal__nav modal__nav--next" @click="showNextImage"
                    v-show="currentIndex < productImages.length - 1">&gt;</button>
            </div>
        </div>
    </div>
</template>

<script setup>
// Dynamically import all images from assets/images/products directory
const productImages = Object.values(import.meta.glob('@/assets/images/products/*', { eager: true })).map(module => module.default)

const selectedImage = ref(null)
const currentIndex = ref(0)
const touchStartX = ref(0)
const touchEndX = ref(0)

const openModal = (image) => {
    selectedImage.value = image
    currentIndex.value = productImages.indexOf(image)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
}

const closeModal = () => {
    selectedImage.value = null
    document.body.style.overflow = 'auto'
    window.removeEventListener('keydown', handleKeyDown)
}

const showNextImage = () => {
    if (currentIndex.value < productImages.length - 1) {
        currentIndex.value++
        selectedImage.value = productImages[currentIndex.value]
    }
}

const showPrevImage = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--
        selectedImage.value = productImages[currentIndex.value]
    }
}

// Xử lý phím mũi tên
const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') showNextImage()
    if (e.key === 'ArrowLeft') showPrevImage()
    if (e.key === 'Escape') closeModal()
}

// Xử lý vuốt trên mobile
const handleTouchStart = (e) => {
    touchStartX.value = e.touches[0].clientX
}

const handleTouchMove = (e) => {
    touchEndX.value = e.touches[0].clientX
}

const handleTouchEnd = () => {
    const swipeThreshold = 50 // Ngưỡng vuốt tối thiểu
    const swipeDistance = touchEndX.value - touchStartX.value

    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            showPrevImage()
        } else {
            showNextImage()
        }
    }
}

// Cleanup event listener when component is unmounted
onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown)
})

</script>

<style lang="scss">
@mixin title-style() {
    font-family: iCielSupaMegaFantastic-Caps;
    font-size: 32px;
    font-weight: 700;
    line-height: 48px;
    text-align: left;
    color: #8A724A;
}

.product {
    margin-top: 70px;

    @media screen and (max-width: 768px) {
        margin-top: 24px;
    }

    &__title {
        @include title-style();
        margin-bottom: 40px;
    }

    &__item {
        width: 100%;
    }

    &__image-wrapper {
        position: relative;
        width: 100%;
        padding-top: 70.75%; // Tỷ lệ 900/1272 = 0.7075 = 70.75%
        border-radius: 8px;
        overflow: hidden;

        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 101%;
            height: 101%;
            object-fit: cover;
            transition: all 0.3s ease;
        }
    }
}

.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 1000;

    &.show {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__content {
        position: relative;
        width: 1272px; // Set chiều rộng cố định
        max-width: 90vw; // Giới hạn chiều rộng tối đa trên màn hình nhỏ
        aspect-ratio: 1272/900; // Đảm bảo tỷ lệ khung hình
        line-height: 0;
    }

    &__image {
        width: 100%;
        height: 100%;
        object-fit: contain;
        display: block;
        margin: 0;
        padding: 0;
    }

    &__close {
        position: absolute;
        top: -40px;
        right: -40px;
        color: white;
        font-size: 30px;
        background: none;
        border: none;
        cursor: pointer;
    }

    &__nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(255, 255, 255, 0.3);
        border: none;
        color: white;
        font-size: 24px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background: rgba(255, 255, 255, 0.5);
        }

        &--prev {
            left: -60px;
        }

        &--next {
            right: -60px;
        }

        @media screen and (max-width: 768px) {
            &--prev {
                left: 10px;
            }

            &--next {
                right: 10px;
            }
        }
    }
}
</style>
