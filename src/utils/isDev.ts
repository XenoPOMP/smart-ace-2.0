/**
 * Defines if current environment is dev.
 */
export const isDev = (): boolean => {
  return process.env.DEV_MODE === 'true';
};
