import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoOneIterationLoopRule = {
  /**
   * Loops with at most one iteration should be refactored.
   *
   * @see [no-one-iteration-loop](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-one-iteration-loop.md)
   */
  'sonarjs/no-one-iteration-loop': Rule<[RuleLevel]>;
};
