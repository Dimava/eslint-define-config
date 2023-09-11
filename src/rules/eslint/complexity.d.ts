import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ComplexityRule {
  /**
   * Enforce a maximum cyclomatic complexity allowed in a program.
   *
   * @see [complexity](https://eslint.org/docs/latest/rules/complexity)
   */
  complexity: Rule<
    [
      RuleLevel,
      (
        | number
        | {
            maximum?: number;
            max?: number;
          }
      ),
    ]
  >;
}
