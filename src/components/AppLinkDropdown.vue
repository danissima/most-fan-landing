<template>
    <div class="app-link-dropdown">
        <span class="app-link-dropdown__title">
            {{ title }}
            <AppIcon id="chevron-down" :width="18" :height="18" />
        </span>
        <ul class="app-link-dropdown__dropdown">
            <li
                class="app-link-dropdown__item"
                v-for="item in props.items"
                :key="item.href + item.title"
            >
                <a :href="item.href" class="app-link-dropdown__link">{{ item.title }}</a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import AppIcon from '@/components/AppIcon.vue'

export interface IDropdownItem {
    href: string,
    title: string,
}

interface IProps {
    title: string,
    items: IDropdownItem[]
}

const props = defineProps<IProps>()
</script>

<style lang="scss">
.app-link-dropdown {
    position: relative;

    &__title {
        align-items: center;
        gap: 6px;
        display: flex;
        transition: color $transition;
        padding: 0 4px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 300;
        line-height: 19px;
        color: $color-link;

        @include hover {
            color: $color-primary;
        }
    }

    &__dropdown {
        position: absolute;        
        top: calc(100% + 2px);
        left: 50%;
        flex-direction: column;
        display: flex;
        transform: translate(-50%, -4px);
        visibility: hidden;
        opacity: 0;
        transition: transform $transition, opacity $transition, visibility $transition;
        background-color: #fff;
        box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
        border-radius: 18px;
        padding: 8px;
    }

    @include hover {
        .app-link-dropdown__dropdown {
            transform: translate(-50%, 0);
            visibility: visible;
            opacity: 1;
        }
    }

    &__link {
        display: block;
        transition: color $transition, background-color $transition;
        border-radius: 8px;
        padding: 4px 8px;
        font-size: 13px;
        color: $color-link;

        @include hover {
            background-color: rgba($color-primary, .1);
        }

        &:active {
            background-color: rgba($color-primary, .2);
        }
    }
}
</style>
