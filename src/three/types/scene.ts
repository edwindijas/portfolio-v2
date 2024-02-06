import type * as Three from 'three'

export interface IMain {
  render: () => void
  addToScene: (v: Three.Mesh[]) => void
  removeFromScene: (v: Three.Mesh[]) => void
}