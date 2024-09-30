<template>
    <div>
        <div class="position-relative d-inline-block">
            <img class="mascot-models" src="~/assets/images/mascot.png" alt="" srcset="">
            <img class="mascot-border" src="~/assets/images/mascot.svg" alt="" srcset="">
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.mascot {
    &-models {
        max-width: 150px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &-border {
        width: 190px;
        animation: spin 15s linear infinite;
    }
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>