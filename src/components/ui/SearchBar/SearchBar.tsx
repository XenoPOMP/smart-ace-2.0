'use client';

import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { X as CloseIcon, Search as SearchIcon } from 'lucide-react';
import { FC, useState } from 'react';

import styles from './SearchBar.module.scss';
import type { SearchBarProps } from './SearchBar.props';

const SearchBar: VariableFC<'input', SearchBarProps> = ({
  className,
  ...props
}) => {
  const [query, setQuery] = useState<string | undefined>(undefined);

  return (
    <div className={cn(styles.searchBarWrapper)} role={'search'}>
      <div className={cn('', styles.iconHolder)}>
        <SearchIcon height={'.9em'} />
      </div>

      <input
        className={cn(styles.searchBar)}
        placeholder={'Поиск'}
        content={query}
        onChange={ev => setQuery(ev.currentTarget.value)}
      />

      {/*<div*/}
      {/*  className={cn('cursor-pointer', styles.iconHolder)}*/}
      {/*  onClick={() => {*/}
      {/*    setQuery('');*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <CloseIcon height={'.9em'} />*/}
      {/*</div>*/}
    </div>
  );
};

export default SearchBar;
