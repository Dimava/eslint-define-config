import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoDuplicateCaseRule = {
  /**
   * Disallow duplicate case labels.
   *
   * @see [no-duplicate-case](https://eslint.org/docs/rules/no-duplicate-case)
   */
  'no-duplicate-case': Rule<[RuleLevel]>;
};
