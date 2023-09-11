import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDupeKeysRule {
  /**
   * Disallow duplicate keys in object literals.
   *
   * @see [no-dupe-keys](https://eslint.org/docs/latest/rules/no-dupe-keys)
   */
  'no-dupe-keys': Rule<[RuleLevel]>;
}
