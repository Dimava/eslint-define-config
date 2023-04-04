import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoAwaitInLoopRule = {
  /**
   * Disallow `await` inside of loops.
   *
   * @see [no-await-in-loop](https://eslint.org/docs/rules/no-await-in-loop)
   */
  'no-await-in-loop': Rule<[RuleLevel]>;
};
