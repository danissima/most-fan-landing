<template>
    <svg
        class="app-icon"
        :width="props.width"
        :height="props.height"
    >
        <use :xlink:href="`#${props.id}`" />
    </svg>
</template>

<script lang="ts" setup>
interface IProps {
    id: string,
    width?: number,
    height?: number,
}

const props = withDefaults(defineProps<IProps>(), {
	width: 24,
	height: 24,
})

</script>
