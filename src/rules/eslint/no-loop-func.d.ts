import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoLoopFuncRule {
  /**
   * Disallow function declarations that contain unsafe references inside loop statements.
   *
   * @see [no-loop-func](https://eslint.org/docs/rules/no-loop-func)
   */
  'no-loop-func': Rule<[RuleLevel]>;
}
