import * as THREE from 'three'
import { type IMain } from '@/types/scene'

class Section {
  private readonly horizontal
  private readonly thickness
  private readonly depth
  private readonly height
  private readonly width
  private readonly main
  private readonly divisions: Division[]
  private sections: THREE.Mesh[] = []

  constructor (main: IMain, width: number, height: number, depth: number, thickness: number, horizontal: boolean, division: number) {
    this.main = main
    this.depth = depth
    this.horizontal = horizontal
    this.thickness = thickness
    this.height = height
    this.width = width

    this.divisions = Array(division).fill(0).map(() => ({
      ratio: 1 / division
    }))

  }

  createBox (): THREE.Mesh {
    const [width, height] = this.horizontal ? [this.width, this.thickness] : [this.thickness, this.height]

    
    const box = new THREE.BoxGeometry(width, height, this.depth)
    const material = new THREE.MeshLambertMaterial({color: 0x52382B })
    return new THREE.Mesh(box, material)
  }


  drawDivisions (): void {
    let left = !this.horizontal ? (-this.width / 2) : (-this.height / 2)

    this.divisions.forEach(
      (div: Division, index: number) => { 
        left = this.drawDivision(div, index, left)
      }
    )
  }

  clear (): void {
    this.main.removeFromScene(this.sections)
    this.sections = []
  }

  drawDivision (divider: Division, index: number, startLeft: number): number {

    if (index === this.divisions.length - 1) {
      return 0
    }

    let left = startLeft

    const sharedWidth = (this.horizontal ? this.height :  this.width) - ((this.divisions.length - 1) * this.thickness)
    const sectionWidth = divider.ratio * sharedWidth
    
    left += sectionWidth

    const mesh = this.createBox()

    if (this.horizontal) {
      mesh.position.y = left + (this.thickness / 2)
    } else {
      mesh.position.x = left + (this.thickness / 2)
    }
    

    this.main.addToScene([mesh])

    this.sections.push(mesh)

    return left - this.thickness
  }


}

interface Division {
  ratio: number,
  mesh?: THREE.Mesh
}

export default Section