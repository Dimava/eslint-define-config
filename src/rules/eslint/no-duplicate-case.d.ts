import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDuplicateCaseRule {
  /**
   * Disallow duplicate case labels.
   *
   * @see [no-duplicate-case](https://eslint.org/docs/latest/rules/no-duplicate-case)
   */
  'no-duplicate-case': Rule<[RuleLevel]>;
}
