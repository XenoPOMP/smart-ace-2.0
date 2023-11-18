import { Metadata } from 'next';

type CustomMetadata = Omit<Metadata, 'robots'> & {
  robots?: {
    noIndex?: boolean;
    noFollow?: boolean;
  };
};

/**
 * This utility allows to generate Next 14
 * [Metadata object] (https://nextjs.org/docs/app/api-reference/functions/generate-metadata#the-metadata-object).
 *
 * @param inputRobots
 * @param props
 */
export const generateMetadata = ({
  robots: inputRobots,
  ...props
}: CustomMetadata): Metadata => {
  const getRobotsContent = (): string | null => {
    const output: ReturnType<typeof getRobotsContent>[] = [];

    /** If no one argument was passed, return undefined. */
    if (
      inputRobots?.noIndex === undefined &&
      inputRobots?.noFollow === undefined
    ) {
      return null;
    }

    if (inputRobots?.noIndex) output.push('noindex');
    if (inputRobots?.noFollow) output.push('nofollow');

    return output.join(', ');
  };

  return { ...props, robots: getRobotsContent() };
};
