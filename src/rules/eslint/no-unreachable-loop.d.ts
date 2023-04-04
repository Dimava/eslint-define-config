import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUnreachableLoopRule = {
  /**
   * Disallow loops with a body that allows only one iteration.
   *
   * @see [no-unreachable-loop](https://eslint.org/docs/rules/no-unreachable-loop)
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
};
