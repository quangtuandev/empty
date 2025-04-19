<template>
    <div class="layout">
        <div>
            <the-header />
            <div class="container">
                <NuxtPage />
            </div>
        </div>
        <the-footer :isFull="$route.meta.footerType === 'full'" />
    </div>
</template>
<script setup>
import TheHeader from '~/components/common/header.vue'
import TheFooter from '~/components/common/footer.vue'
</script>
<style lang="scss" scoped>
.layout {
    min-height: 100svh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>