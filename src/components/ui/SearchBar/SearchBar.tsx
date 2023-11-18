'use client';

import { VariableFC } from '@xenopomp/advanced-types';
import { isUndefined } from '@xenopomp/advanced-utils';
import cn from 'classnames';
import { Search as SearchIcon } from 'lucide-react';
import { parseAsString, useQueryState } from 'next-usequerystate';
import { useEffect, useState } from 'react';

import styles from './SearchBar.module.scss';
import type { SearchBarProps } from './SearchBar.props';

const SearchBar: VariableFC<'input', SearchBarProps> = ({
  className,
  ...props
}) => {
  const [query, setQuery] = useQueryState<string>('q', parseAsString);

  useEffect(() => {
    if (isUndefined(query)) {
      return;
    }
  }, [query]);

  return (
    <div className={cn(styles.searchBarWrapper)} role={'search'}>
      <div className={cn('', styles.iconHolder)}>
        <SearchIcon height={'.9em'} />
      </div>

      <input
        className={cn(styles.searchBar)}
        placeholder={'Поиск'}
        content={query ?? undefined}
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
