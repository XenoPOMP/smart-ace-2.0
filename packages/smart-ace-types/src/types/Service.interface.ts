export enum WorkHardness {
  Easy,
  Medium,
  Hard,
  Hardcore,
}

export interface IService {
  /** The title of service. */
  title: string;
  /** Description of service. */
  desc?: string;

  /** Price pool. */
  price: {
    /** Minimal price of one project. */
    minimal: number;
  };

  /**
   * Describe required time for make job done
   * in weeks.
   */
  executionTime: {
    from: number;
    to: number;
  };

  /** Describe how hard is project to be developed. */
  hardness: WorkHardness;

  ratings: Array<1 | 2 | 3 | 4 | 5>;
}
