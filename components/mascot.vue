<template>
    <div>
        <div class="position-relative d-inline-block mascot">
            <img class="mascot-models" src="~/assets/images/model.png" alt="" srcset="">
            <img class="mascot-border" src="~/assets/images/bg-svg.svg" alt="" srcset="">
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.mascot {
    background-color: #E4D3B0;
    border-radius: 50%;
    padding: 4px;
    &-models {
        max-width: 80px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &-border {
        width: 120px;
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