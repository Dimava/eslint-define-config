import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoPathConcatRule = {
  /**
   * Disallow string concatenation with `__dirname` and `__filename`.
   *
   * @deprecated
   *
   * @see [no-path-concat](https://eslint.org/docs/rules/no-path-concat)
   */
  'no-path-concat': Rule<[RuleLevel]>;
};
