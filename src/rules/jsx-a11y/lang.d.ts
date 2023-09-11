import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface LangRule {
  /**
   * Enforce lang attribute has a valid value.
   *
   * @see [lang](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/lang.md)
   */
  'jsx-a11y/lang': Rule<
    [
      RuleLevel,
      {
        [k: string]: any;
      },
    ]
  >;
}
