import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoProtoRule {
  /**
   * Disallow the use of the `__proto__` property.
   *
   * @see [no-proto](https://eslint.org/docs/latest/rules/no-proto)
   */
  'no-proto': Rule<[RuleLevel]>;
}
