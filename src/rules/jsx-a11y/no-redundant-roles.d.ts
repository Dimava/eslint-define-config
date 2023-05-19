import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRedundantRolesRule {
  /**
   * Enforce explicit role property is not the same as implicit/default role property on element.
   *
   * @see [no-redundant-roles](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-redundant-roles.md)
   */
  'jsx-a11y/no-redundant-roles': Rule<
    [
      RuleLevel,
      {
        [k: string]: string[];
      },
    ]
  >;
}
