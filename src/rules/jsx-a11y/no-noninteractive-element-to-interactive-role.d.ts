import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoNoninteractiveElementToInteractiveRoleRule {
  /**
   * Non-interactive elements should not be assigned interactive roles.
   *
   * @see [no-noninteractive-element-to-interactive-role](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-element-to-interactive-role.md)
   */
  'jsx-a11y/no-noninteractive-element-to-interactive-role': Rule<
    [
      RuleLevel,
      {
        [k: string]: string[];
      },
    ]
  >;
}
