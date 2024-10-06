<template>
    <div class="layout">
        <div>
            <the-header />
            <div class="container">
                <NuxtPage />
            </div>
        </div>
        <the-footer />
    </div>
</template>
<script setup>
import TheHeader from '~/components/common/header.vue'
import TheFooter from '~/components/common/footer.vue'
</script>
<style lang="scss" scoped>
.layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>