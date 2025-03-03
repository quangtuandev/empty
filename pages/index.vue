<template>
    <div class="wrapper d-flex flex-column">
        <PagesHomeHerobanner />
        <PagesHomeStory />
        <PagesHomeQuality />
        <PagesHomeBeef />
        <PagesHomePapaviet />
        <PagesHomeConnecting />
    </div>
</template>
<script setup>
definePageMeta({
  footerType: 'full', // Hoặc 'full'
});
</script>
<style lang="scss" scoped>
.wrapper {
    gap: 128px;
    @media (max-width: 1199px) {
        gap: 64px;
    }
}
</style>