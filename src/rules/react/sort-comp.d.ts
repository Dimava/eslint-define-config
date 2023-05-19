import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface SortCompRule {
  /**
   * Enforce component methods order.
   *
   * @see [sort-comp](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-comp.md)
   */
  'react/sort-comp': Rule<
    [
      RuleLevel,
      {
        order?: string[];
        groups?: {
          /**
           */
          [k: string]: string[];
        };
      },
    ]
  >;
}
