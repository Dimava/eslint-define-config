import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RoleSupportsAriaPropsRule {
  /**
   * Enforce that elements with explicit or implicit roles defined contain only `aria-*` properties supported by that `role`.
   *
   * @see [role-supports-aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/role-supports-aria-props.md)
   */
  'jsx-a11y/role-supports-aria-props': Rule<
    [
      RuleLevel,
      {
        [k: string]: any;
      },
    ]
  >;
}
