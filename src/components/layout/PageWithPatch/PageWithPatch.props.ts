import { CSSProperties } from 'react';

export interface PageWithPatchProps {
  proportion?: `${CSSProperties['gridTemplateColumns']} max-content ${CSSProperties['gridTemplateColumns']}`;
}
