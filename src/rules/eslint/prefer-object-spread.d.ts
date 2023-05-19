import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferObjectSpreadRule {
  /**
   * Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
   *
   * @see [prefer-object-spread](https://eslint.org/docs/rules/prefer-object-spread)
   */
  'prefer-object-spread': Rule<[RuleLevel]>;
}
