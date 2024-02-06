import { type PropsWithChildren } from 'react'

const PageWrapper = (
  {children}: PageWrapperProps

  ): JSX.Element => <div className='h-full w-full'>
    {children}
  </div>

interface PageWrapperProps extends PropsWithChildren {

}

export default PageWrapper