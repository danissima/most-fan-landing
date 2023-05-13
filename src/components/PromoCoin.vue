<template>
    <canvas class="promo-coin" ref="coin" />
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import {
	AmbientLight,
	CylinderGeometry,
	DirectionalLight,
	Group,
	Mesh,
	MeshStandardMaterial,
	PerspectiveCamera,
	Scene,
	WebGLRenderer,
} from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const SCENE_WIDTH = 653
const SCENE_HEIGHT = 697
const coin = ref<HTMLCanvasElement | null>(null)

/* adding scene and camera */
const scene = new Scene()
const camera = new PerspectiveCamera(
	75,
	SCENE_WIDTH / SCENE_HEIGHT,
	0.1,
	1000,
)

camera.position.z = 4.5
scene.add(camera)

/* adding ambient light */
const ambientLight = new AmbientLight(0xffffff, 1)
scene.add(ambientLight)

/* adding directional light */
const directionalLight = new DirectionalLight(0xffffff, 2)
directionalLight.rotation.set(3, 0, 0)
directionalLight.position.set(0, -3, 1)
scene.add(directionalLight)

/* adding bigger disc*/
const biggerDisc = new Mesh(
	new CylinderGeometry(2.5, 2.5, 0.3, 64),
	new MeshStandardMaterial({ color: 0xa4adc1, roughness: 0, metalness: 0.5 }),
)

/* adding smaller disc */
const smallerDisc = new Mesh(
	new CylinderGeometry(2.3, 2.3, 0.2, 64),
	new MeshStandardMaterial({ color: 0xa4adc1, roughness: 0, metalness: 0.5 }),
)
smallerDisc.position.y += 0.15

/* adding discs to the group */
const discsGroup = new Group()
discsGroup.add(biggerDisc)
discsGroup.add(smallerDisc)

scene.add(discsGroup)

const loader = new GLTFLoader()
loader.load('/most-fan-landing/models/scene.gltf', (gltf) => {
	scene.add(gltf.scene)
})

/* setting up renderer */
onMounted(() => {
	const renderer = new WebGLRenderer({
		alpha: true,
		antialias: true,
		canvas: coin.value as HTMLCanvasElement,
	})

	renderer.setSize(SCENE_WIDTH, SCENE_HEIGHT, false)

	function animate() {
		requestAnimationFrame( animate )
		discsGroup.rotation.x += 0.01
		discsGroup.rotation.y += 0.01
		discsGroup.rotation.z += 0.01
		renderer.render( scene, camera )
	}

	animate()
})

</script>

<style lang="scss">
.promo-coin {
    width: 100%;
}
</style>
