import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoEmptyKeyRule {
  /**
   * Disallow empty mapping keys.
   *
   * @see [no-empty-key](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-key.html)
   */
  'yml/no-empty-key': Rule<[RuleLevel]>;
}
