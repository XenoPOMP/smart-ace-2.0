import { CSSProperties } from 'react';

type ColumnTemplate = NonNullable<CSSProperties['gridTemplateColumns']>;

export interface PageWithPatchProps {
  proportion?: `${ColumnTemplate} max-content ${ColumnTemplate}`;
}
