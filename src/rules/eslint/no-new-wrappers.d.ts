import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoNewWrappersRule = {
  /**
   * Disallow `new` operators with the `String`, `Number`, and `Boolean` objects.
   *
   * @see [no-new-wrappers](https://eslint.org/docs/rules/no-new-wrappers)
   */
  'no-new-wrappers': Rule<[RuleLevel]>;
};
