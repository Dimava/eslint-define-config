import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoStringRefsRule {
  /**
   * Disallow using string references.
   *
   * @see [no-string-refs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-string-refs.md)
   */
  'react/no-string-refs': Rule<
    [
      RuleLevel,
      {
        noTemplateLiterals?: boolean;
      },
    ]
  >;
}
