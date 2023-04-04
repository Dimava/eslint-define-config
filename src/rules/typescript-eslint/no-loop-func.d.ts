import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoLoopFuncRule = {
  /**
   * Disallow function declarations that contain unsafe references inside loop statements.
   *
   * @see [no-loop-func](https://typescript-eslint.io/rules/no-loop-func)
   */
  '@typescript-eslint/no-loop-func': Rule<[RuleLevel]>;
};
