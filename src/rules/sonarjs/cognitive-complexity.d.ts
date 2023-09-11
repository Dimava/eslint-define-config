import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface CognitiveComplexityRule {
  /**
   * Cognitive Complexity of functions should not be too high.
   *
   * @see [cognitive-complexity](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/cognitive-complexity.md)
   */
  'sonarjs/cognitive-complexity': Rule<
    [RuleLevel, number, 'sonar-runtime' | 'metric']
  >;
}
