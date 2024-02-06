import { useEffect, useRef } from 'react'
import Scene from '@/three/main'

const CustomizeWardRobe = () : JSX.Element => {
  const canvas = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (canvas.current === null) {
      return
    }

    canvas.current.width = canvas.current.getBoundingClientRect().width
    canvas.current.height = canvas.current.getBoundingClientRect().height

    const scene = new Scene(canvas.current)

    void(scene)

    // eslint-disable-next-line consistent-return
    return (): undefined => {
      scene.destroy()
    }
  }, [])

  return <div className='w-[calc(100-30em)] h-full bg-[#ccc] grow-0'>
    <canvas className='w-full h-full' ref={canvas} />
  </div>
}

export default CustomizeWardRobe