import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoProtoRule = {
  /**
   * Disallow the use of the `__proto__` property.
   *
   * @see [no-proto](https://eslint.org/docs/rules/no-proto)
   */
  'no-proto': Rule<[RuleLevel]>;
};
