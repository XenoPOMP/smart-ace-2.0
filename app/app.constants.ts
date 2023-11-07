import ogSquareImage from '@/public/images/og/OGImage 200x200.png';
import IAppConstants from '@/src/interfaces/AppConstants.interface';

export const AppConstants: IAppConstants = {
  appName: 'Next Template',
  maxContainerWidth: '1920px',
  sharedOpenGraphConfig: {
    images: [
      {
        url: ogSquareImage.src,
        width: 106,
        height: 106,
      },
    ],
    url: process.env.CANONICAL_URL,
    type: 'website',
  },
};
