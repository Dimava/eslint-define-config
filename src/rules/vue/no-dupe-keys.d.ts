import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDupeKeysRule {
  /**
   * Disallow duplication of field names.
   *
   * @see [no-dupe-keys](https://eslint.vuejs.org/rules/no-dupe-keys.html)
   */
  'vue/no-dupe-keys': Rule<
    [
      RuleLevel,
      {
        groups?: any[];
      },
    ]
  >;
}
