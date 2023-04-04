import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoNewRequireRule = {
  /**
   * Disallow `new` operators with calls to `require`.
   *
   * @see [no-new-require](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-new-require.md)
   */
  'node/no-new-require': Rule<[RuleLevel]>;
};
