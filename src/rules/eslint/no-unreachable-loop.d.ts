import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnreachableLoopRule {
  /**
   * Disallow loops with a body that allows only one iteration.
   *
   * @see [no-unreachable-loop](https://eslint.org/docs/latest/rules/no-unreachable-loop)
   */
  'no-unreachable-loop': Rule<
    [
      RuleLevel,
      {
        ignore?: (
          | 'WhileStatement'
          | 'DoWhileStatement'
          | 'ForStatement'
          | 'ForInStatement'
          | 'ForOfStatement'
        )[];
      },
    ]
  >;
}
