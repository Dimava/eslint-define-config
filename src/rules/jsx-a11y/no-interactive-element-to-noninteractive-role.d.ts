import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoInteractiveElementToNoninteractiveRoleRule {
  /**
   * Interactive elements should not be assigned non-interactive roles.
   *
   * @see [no-interactive-element-to-noninteractive-role](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-interactive-element-to-noninteractive-role.md)
   */
  'jsx-a11y/no-interactive-element-to-noninteractive-role': Rule<
    [
      RuleLevel,
      {
        [k: string]: string[];
      },
    ]
  >;
}
