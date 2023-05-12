<template>
    <section class="section-promo">
        <AppContainer>
            <div class="section-promo__content">
                <div class="section-promo__text">
                    <h1 class="section-promo__title">Engage with celebrities and earn</h1>
                    <p>By owning their tokens</p>
                </div>
            </div>
        </AppContainer>        
    </section>
</template>

<script lang="ts" setup>
import AppContainer from './AppContainer.vue'

</script>

<style lang="scss">
.section-promo {
    padding: 128px 0 175px;

    @include break($lg) {
        padding-top: 104px;
    }

    &__content {
        align-items: center;
        display: flex;

        @include break($lg) {
            text-align: center;
        }
    }

    &__title {
        margin-bottom: 24px;
    }
}
</style>
