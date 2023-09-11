import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoPathConcatRule {
  /**
   * Disallow string concatenation with `__dirname` and `__filename`.
   *
   * @see [no-path-concat](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-path-concat.md)
   */
  'n/no-path-concat': Rule<[RuleLevel]>;
}
