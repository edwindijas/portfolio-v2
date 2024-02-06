import * as Three from 'three'
import { type IMain } from '@/three/types/scene'
import Section from './section'

class WardRobe {
  private readonly main: Main

  private height =  10
  private width = 20
  private depth = 7
  private readonly thickness = 0.15
  private readonly boxObjects: Three.Mesh[]
  private readonly propertyScale = {
    x: 1,
    y: 1,
    z: 0
  }

  constructor (main: Main) {
    this.main = main

    this.boxObjects = Array(5).fill(0).map((s: any, index: number)
    : Three.Mesh => this.createBox(index % 2 === 0, index === 4))

    this.updatePosition()
    this.main.addToScene(this.boxObjects)
    this.createSections()
  }

  createBox (horizontal: boolean, isLast: boolean): Three.Mesh {
    let {depth} = this
    let [width, height] = horizontal ? [this.width, this.thickness] : [this.thickness, this.height]

    if (isLast) {
      width = this.width
      height = this.height
      depth = this.thickness
    }
    
    const box = new Three.BoxGeometry(width, height, depth)
    const material = new Three.MeshLambertMaterial({color: 0x52382B })
    return new Three.Mesh(box, material)
  }

  updateDimensions (dimensions: Dimensions): void {
    if (dimensions.width !== undefined) {
      this.width = dimensions.width
    }

    if (dimensions.height !== undefined) {
      this.height = dimensions.height
    }

    if (dimensions.depth !== undefined) {
      this.depth = dimensions.depth
    }
  }

  updatePosition (): void {

    const [x, y] = [this.width / 2, this.height / 2]
    const additive = this.thickness / 2

    this.boxObjects[0].position.y = y - additive
    this.boxObjects[2].position.y = -y + additive
    this.boxObjects[1].position.x = x - additive
    this.boxObjects[3].position.x = -x + additive
    this.boxObjects[4].position.z = -this.depth / 2

  }

  createSections (): void {
    const sections = new Section(this.main, this.width, this.height, this.depth, this.thickness, true, 3)
    sections.drawDivisions()
  }
}


type Main = object & IMain

interface Dimensions {
  width?: number;
  height?: number;
  depth?: number
}

export default WardRobe