import cn from 'classnames';
import { FC } from 'react';

import Loader from '@/src/components/ui/Loader/Loader';

const ServiceLoadingPage: FC<{}> = () => {
  return (
    <>
      <div
        className={cn(
          'w-full h-full flex justify-center items-center text-service-font'
        )}
      >
        <Loader />
      </div>
    </>
  );
};

export default ServiceLoadingPage;
