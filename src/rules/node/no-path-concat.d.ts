import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoPathConcatRule = {
  /**
   * Disallow string concatenation with `__dirname` and `__filename`.
   *
   * @see [no-path-concat](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-path-concat.md)
   */
  'node/no-path-concat': Rule<[RuleLevel]>;
};
