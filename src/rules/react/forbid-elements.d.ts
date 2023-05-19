import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ForbidElementsRule {
  /**
   * Disallow certain elements.
   *
   * @see [forbid-elements](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-elements.md)
   */
  'react/forbid-elements': Rule<
    [
      RuleLevel,
      {
        forbid?: (
          | string
          | {
              element: string;
              message?: string;
            }
        )[];
      },
    ]
  >;
}
