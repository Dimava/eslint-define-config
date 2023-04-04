import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type YodaRule = {
  /**
   * Require or disallow "Yoda" conditions.
   *
   * @see [yoda](https://eslint.org/docs/rules/yoda)
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
};
