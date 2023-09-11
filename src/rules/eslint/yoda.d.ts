import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface YodaRule {
  /**
   * Require or disallow "Yoda" conditions.
   *
   * @see [yoda](https://eslint.org/docs/latest/rules/yoda)
   */
  yoda: Rule<
    [
      RuleLevel,
      'always' | 'never',
      {
        exceptRange?: boolean;
        onlyEquality?: boolean;
      },
    ]
  >;
}
