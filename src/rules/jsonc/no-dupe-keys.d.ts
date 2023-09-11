import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDupeKeysRule {
  /**
   * Disallow duplicate keys in object literals.
   *
   * @see [no-dupe-keys](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-dupe-keys.html)
   */
  'jsonc/no-dupe-keys': Rule<[RuleLevel]>;
}
