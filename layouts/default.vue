<template>
    <div class="layout">
        <the-header />
        <div class="container">
            <NuxtPage />
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
}
</style>