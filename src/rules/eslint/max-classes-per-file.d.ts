import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface MaxClassesPerFileRule {
  /**
   * Enforce a maximum number of classes per file.
   *
   * @see [max-classes-per-file](https://eslint.org/docs/latest/rules/max-classes-per-file)
   */
  'max-classes-per-file': Rule<
    [
      RuleLevel,
      (
        | number
        | {
            ignoreExpressions?: boolean;
            max?: number;
          }
      ),
    ]
  >;
}
