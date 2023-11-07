import { Defined, Modify } from '@xenopomp/advanced-types';
import { Metadata } from 'next';

/**
 * Config of Open Graph from Next Metadata.
 *
 * @see [Next Metadata docs](https://nextjs.org/docs/app/building-your-application/optimizing/metadata#merging)
 */
type OpenGraphConfig = Defined<
  NonNullable<Extract<Metadata['openGraph'], { type: 'website' }>>
>;

export type OGImage = Defined<Exclude<OpenGraphConfig['images'], Array<any>>>;

interface IAppConstants {
  appName: string;
  maxContainerWidth: string;
  sharedOpenGraphConfig: Partial<
    Modify<OpenGraphConfig, 'images', Array<OGImage>>
  >;
}

export default IAppConstants;
