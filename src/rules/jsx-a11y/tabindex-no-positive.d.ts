import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface TabindexNoPositiveRule {
  /**
   * Enforce `tabIndex` value is not greater than zero.
   *
   * @see [tabindex-no-positive](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/tabindex-no-positive.md)
   */
  'jsx-a11y/tabindex-no-positive': Rule<
    [
      RuleLevel,
      {
        [k: string]: any;
      },
    ]
  >;
}
