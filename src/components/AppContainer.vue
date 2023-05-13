<template>
    <div class="app-container">
        <slot />
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.app-container {
    margin: 0 auto;
    width: 100%;
    max-width: calc(1600px + 42px * 2);
    padding: 0 42px;
}
</style>
