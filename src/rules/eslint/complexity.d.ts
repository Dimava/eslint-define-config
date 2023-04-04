import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ComplexityRule = {
  /**
   * Enforce a maximum cyclomatic complexity allowed in a program.
   *
   * @see [complexity](https://eslint.org/docs/rules/complexity)
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
};
