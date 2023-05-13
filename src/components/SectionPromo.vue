<template>
    <section class="section-promo">
        <AppContainer>
            <div class="section-promo__content">
                <div class="section-promo__text">
                    <h1 class="section-promo__title">Engage with celebrities and earn</h1>
                    <p>By owning their tokens</p>
                </div>
                <div class="section-promo__coin">
                    <PromoCoin />
                </div>
            </div>
        </AppContainer>        
    </section>
</template>

<script lang="ts" setup>
import AppContainer from '@/components/AppContainer.vue'
import PromoCoin from '@/components/PromoCoin.vue'

</script>

<style lang="scss">
.section-promo {
    padding: 128px 0 175px;

    @include break($lg) {
        padding-top: 104px;
    }

    &__content {
        align-items: center;
        gap: 24px;
        display: flex;

        @include break($lg) {
            flex-direction: column;
            gap: 84px;
            text-align: center;
        }

        @include break($sm) {
            gap: 34px;
        }
    }

    &__title {
        margin-bottom: 24px;
    }

    &__text {
        flex: 7;
    }

    &__coin {
        flex: 5;
    }

    @include break($xxl) {
        &__text {
            flex: calc(100% / 3 * 2);
        }

        &__coin {
            flex: calc(100% / 3 - 12px);
        }
    }

    @include break($lg) {
        &__coin {
            max-width: 356px;
        }
    }
}
</style>
