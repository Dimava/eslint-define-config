import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferRegexLiteralsRule {
  /**
   * Disallow use of the `RegExp` constructor in favor of regular expression literals.
   *
   * @see [prefer-regex-literals](https://eslint.org/docs/latest/rules/prefer-regex-literals)
   */
  'prefer-regex-literals': Rule<
    [
      RuleLevel,
      {
        disallowRedundantWrapping?: boolean;
      },
    ]
  >;
}
