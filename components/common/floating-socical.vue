<template>
    <div class="floating-social">
        <div class="floating-social__item">
            <a href="https://www.facebook.com/papaviet.vn" target="_blank">
                <i class="icon-facebook"></i>
            </a>
        </div>
        <div class="floating-social__item">
            <a href="https://www.instagram.com/papaviet.vn" target="_blank">
                <i class="icon-instagram"></i>
            </a>
        </div>
        <div class="floating-social__item">
            <a href="https://www.youtube.com/channel/UC9J9Z9Z9J9Z9J9Z9J9Z9J9Z9" target="_blank">
                <i class="icon-tiktok"></i>
            </a>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.floating-social {
    position: fixed;
    top: 30%;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
    z-index: 999;
    background: linear-gradient(180deg, #801619 0%, #570F11 100%);
    font-size: 24px;
    color: #E4D3B0;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    padding: 20px 12px;

    &__item {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all 0.3s;

        img {
            width: 20px;
            height: 20px;
        }

        &:not(:last-child) {
            &::before {
                content: "";
                position: absolute;
                bottom: -12px;
                left: 0;
                width: 100%;
                height: 1px;
                background: #A82326;
            }
        }
    }
}
</style>