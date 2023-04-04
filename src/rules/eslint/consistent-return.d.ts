import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ConsistentReturnRule = {
  /**
   * Require `return` statements to either always or never specify values.
   *
   * @see [consistent-return](https://eslint.org/docs/rules/consistent-return)
   */
  'consistent-return': Rule<
    [
      RuleLevel,
      {
        treatUndefinedAsUnspecified?: boolean;
      },
    ]
  >;
};
