import CustomizeWardRobe from '@/components/organisms/customWardRobe3D';
import CustomWardRobeControls from '@/components/organisms/customWardRobeControls';
import PageWrapper from '@/components/organisms/pageWrapper';

const PageCustomizeWardRobe = (): JSX.Element => <PageWrapper >
  <div className='h-full w-full flex' >
    <CustomizeWardRobe />
    <CustomWardRobeControls />
  </div>
</PageWrapper>

export default PageCustomizeWardRobe