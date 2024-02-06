/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Three from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'
import GUI from 'lil-gui'; 
import { type IMain } from '../types/scene'
import WardRobe from '../models/wardrobe'


class Main implements IMain {
  // private readonly canvas: HTMLCanvasElement | undefined
  private readonly scene: Three.Scene
  private readonly camera: Three.PerspectiveCamera
  private readonly renderer: Three.WebGLRenderer
  private readonly wardRobe: WardRobe
  private readonly controls: OrbitControls

  constructor (canvas: HTMLCanvasElement) {
    this.animate = this.animate.bind(this)

    const gui = new GUI();
    
    this.renderer = new Three.WebGLRenderer({
      canvas,
      alpha: true
    })

    const {width, height} = canvas
    // eslint-disable-next-line no-param-reassign
    canvas.width = width
    // eslint-disable-next-line no-param-reassign
    canvas.height = height

    this.renderer.setSize(width, height)
    this.renderer.setPixelRatio(window.devicePixelRatio)


    this.scene = new Three.Scene()
    this.camera = new Three.PerspectiveCamera(70, width / height, 0.1, 1000)
    this.camera.position.z = 15
    this.camera.position.y = 2
    this.scene.add(this.camera)

    this.wardRobe = new WardRobe(this)
    this.controls = new OrbitControls(this.camera, canvas.parentElement as HTMLElement)
    this.controls.enabled = true

    this.addLights(-40, 0, 0)
    this.addLights(40, 20, 40)
    
    this.animate()
  }

  addToScene (meshes: Three.Mesh[]): void {
    meshes.forEach((mesh) => {
      console.log(this.scene.position)
      this.scene.add(mesh)
    })
  }

  render (): void {
    this.renderer.render(this.scene, this.camera)
  }

  animate (): void {
    this.render()
    requestAnimationFrame(this.animate)
  }

  destroy (): void {
    while(this.scene.children.length > 0){ 
      this.scene.remove(this.scene.children[0]); 
    }
  }

  addLights (x: number, y: number, z: number): void {
    const light = new Three.DirectionalLight( 0xffffff, 1 );
    light.position.set( x, y, z ); // default; light shining from top
    light.castShadow = true; // default false

    // Set up shadow properties for the light
    light.shadow.mapSize.width = 512; // default
    light.shadow.mapSize.height = 512; // default
    light.shadow.camera.near = 0.5; // default
    light.shadow.camera.far = 500; // default
        this.scene.add( light );

    const directionalLight = new Three.DirectionalLight( 0xffffff, 2 );

    directionalLight.castShadow = true
    this.scene.add( directionalLight );
  }
}

export default Main