import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferTagOverRoleRule {
  /**
   * Enforces using semantic DOM elements over the ARIA `role` property.
   *
   * @see [prefer-tag-over-role](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/prefer-tag-over-role.md)
   */
  'jsx-a11y/prefer-tag-over-role': Rule<
    [
      RuleLevel,
      {
        [k: string]: any;
      },
    ]
  >;
}
