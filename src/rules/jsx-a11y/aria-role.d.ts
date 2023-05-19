import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface AriaRoleRule {
  /**
   * Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
   *
   * @see [aria-role](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-role.md)
   */
  'jsx-a11y/aria-role': Rule<
    [
      RuleLevel,
      {
        allowedInvalidRoles?: string[];
        ignoreNonDOM?: boolean;
        [k: string]: any;
      },
    ]
  >;
}
