import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoAutofocusRule {
  /**
   * Enforce autoFocus prop is not used.
   *
   * @see [no-autofocus](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-autofocus.md)
   */
  'jsx-a11y/no-autofocus': Rule<
    [
      RuleLevel,
      {
        ignoreNonDOM?: boolean;
        [k: string]: any;
      },
    ]
  >;
}
