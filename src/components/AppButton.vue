<template>
	<button
		:class="classes"
		:type="props.type"
	>
		<slot />
	</button>
</template>

<script lang="ts" setup>
import { ButtonHTMLAttributes, computed } from 'vue'

type TKind = 'unstyled' | undefined

interface IProps {
	type?: ButtonHTMLAttributes['type']
	kind?: TKind
}

const props = withDefaults(defineProps<IProps>(), {
	type: 'button',
	kind: undefined,
})

const classes = computed<Record<string, boolean>>(() => {
	return {
		'app-button': true,
		[`app-button_${props.kind}`]: !!props.kind,
	}
})

</script>

<style lang="scss">
.app-button {
	&:not(.app-button_unstyled) {
		transition: background-color $transition;
		border-radius: 32px;
		padding: 12px 32px;
		background-color: $color-primary;
		color: #fff;

		@include hover {
			background-color: darken($color-primary, 3%);
		}

		&:active {
			background-color: darken($color-primary, 7%);
		}
	}

	&_unstyled {
		flex-direction: column;
		display: flex;
		background-color: transparent;
	}
}
</style>
