import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoNewWrappersRule {
  /**
   * Disallow `new` operators with the `String`, `Number`, and `Boolean` objects.
   *
   * @see [no-new-wrappers](https://eslint.org/docs/latest/rules/no-new-wrappers)
   */
  'no-new-wrappers': Rule<[RuleLevel]>;
}
