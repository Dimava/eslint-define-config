import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RoleHasRequiredAriaPropsRule {
  /**
   * Enforce that elements with ARIA roles must have all required attributes for that role.
   *
   * @see [role-has-required-aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/role-has-required-aria-props.md)
   */
  'jsx-a11y/role-has-required-aria-props': Rule<
    [
      RuleLevel,
      {
        [k: string]: any;
      },
    ]
  >;
}
