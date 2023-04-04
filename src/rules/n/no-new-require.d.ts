import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoNewRequireRule = {
  /**
   * Disallow `new` operators with calls to `require`.
   *
   * @see [no-new-require](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-new-require.md)
   */
  'n/no-new-require': Rule<[RuleLevel]>;
};
