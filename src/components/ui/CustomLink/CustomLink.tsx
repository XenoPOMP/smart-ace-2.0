import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import Link from 'next/link';

import styles from './CustomLink.module.scss';
import type { CustomLinkProps } from './CustomLink.props';

const CustomLink: VariableFC<typeof Link, CustomLinkProps> = ({
  applyStyles = true,
  className,
  ...props
}) => {
  return (
    <Link
      className={cn(applyStyles && styles.customLink, className)}
      {...props}
    />
  );
};

export default CustomLink;
