<template>
	<canvas class="promo-coin" ref="canvas" />
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import {
	DirectionalLight,
	// DirectionalLightHelper,
	Group,
	Mesh,
	MeshStandardMaterial,
	OrthographicCamera,
	Scene,
	WebGLRenderer,
} from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const SCENE_WIDTH = 653
const SCENE_HEIGHT = 697
const canvas = ref<HTMLCanvasElement | null>(null)

/* adding scene and camera */
const scene = new Scene()
const camera = new OrthographicCamera(-1.7, 1.7, 1.85, -1.85, 0.1, 1000)
camera.position.z = 5
scene.add(camera)

/* adding directional light */
const directionalLightTop = new DirectionalLight(0xffffff, 0.1)
// const helperTop = new DirectionalLightHelper(directionalLightTop, 1, 0x000000)
directionalLightTop.position.set(-0.3, 3, -2)

const directionalLightBottom = new DirectionalLight(0xffffff, 0.75)
// directionalLightBottom.position.set(3, -4, 3)
directionalLightBottom.position.set(-0.5, -4, 4)
// const helperBottom = new DirectionalLightHelper(directionalLightBottom, 1, 0x000000)

const directionalLightRight = new DirectionalLight(0xffffff, 0.1)
// const helperRight = new DirectionalLightHelper(directionalLightRight, 1, 0x000000)
directionalLightRight.position.set(4, -1, 4)
directionalLightRight.rotation.set(0, -0.8, -2)

scene.add(directionalLightTop)
scene.add(directionalLightBottom)
scene.add(directionalLightRight)

/* loading coin model */
let coin: Group | null = null
const loader = new GLTFLoader()
// loader.load('/models/token/2-side-token.gltf', (gltf) => {
loader.load('/most-fan-landing/models/token/2-side-token.gltf', (gltf) => {
	coin = gltf.scene
	coin.traverse((child) => {
		const mesh = child as Mesh
		if (mesh.material) {
			const material = mesh.material as MeshStandardMaterial
			material.color.r = 4
			material.color.g = 4
			material.color.b = 4
			material.roughness = 0.6
		}
	})

	coin.rotation.x -= 0.3
	coin.rotation.y += 0.6

	scene.add(coin)
})

/* setting up renderer */
onMounted(() => {
	const renderer = new WebGLRenderer({
		alpha: true,
		antialias: true,
		canvas: canvas.value as HTMLCanvasElement,
	})

	renderer.setSize(SCENE_WIDTH, SCENE_HEIGHT, false)

	function animate() {
		requestAnimationFrame(animate)
		if (coin) {
			coin.rotation.y -= 0.01
			coin.rotation.z -= 0.01
		}

		renderer.render(scene, camera)
	}

	animate()
})

</script>

<style lang="scss">
.promo-coin {
	width: 100%;
}
</style>
