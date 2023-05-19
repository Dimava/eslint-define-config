import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoOnchangeRule {
  /**
   * Enforce usage of `onBlur` over `onChange` on select menus for accessibility.
   *
   * @deprecated
   *
   * @see [no-onchange](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-onchange.md)
   */
  'jsx-a11y/no-onchange': Rule<
    [
      RuleLevel,
      {
        [k: string]: any;
      },
    ]
  >;
}
