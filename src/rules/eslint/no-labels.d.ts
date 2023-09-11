import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoLabelsRule {
  /**
   * Disallow labeled statements.
   *
   * @see [no-labels](https://eslint.org/docs/latest/rules/no-labels)
   */
  'no-labels': Rule<
    [
      RuleLevel,
      {
        allowLoop?: boolean;
        allowSwitch?: boolean;
      },
    ]
  >;
}
