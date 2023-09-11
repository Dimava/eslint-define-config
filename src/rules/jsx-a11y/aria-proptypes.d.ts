import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface AriaProptypesRule {
  /**
   * Enforce ARIA state and property values are valid.
   *
   * @see [aria-proptypes](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-proptypes.md)
   */
  'jsx-a11y/aria-proptypes': Rule<
    [
      RuleLevel,
      {
        [k: string]: any;
      },
    ]
  >;
}
