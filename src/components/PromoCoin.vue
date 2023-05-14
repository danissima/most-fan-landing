<template>
    <canvas class="promo-coin" ref="canvas" />
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import {
	DirectionalLight,
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
const camera = new OrthographicCamera(-1.7, 1.7, 1.8, -1.8, 0.1, 1000)
camera.position.z = 5
scene.add(camera)

/* adding directional light */
const directionalLight = new DirectionalLight(0xced4f0, 0.5)
directionalLight.position.set(0, -6, 4)
scene.add(directionalLight)

/* loading coin model */
let coin: Group | null = null
const loader = new GLTFLoader()
loader.load('/models/token/2-side-token.gltf', (gltf) => {
	coin = gltf.scene
	coin.traverse((child) => {
		const mesh = child as Mesh
		if (mesh.material) {
			const material = mesh.material as MeshStandardMaterial
			material.color.r = 255
			material.color.g = 255
			material.color.b = 255
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
			coin.rotation.y += 0.01
			coin.rotation.z += 0.01
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
