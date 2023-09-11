import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoEmptyMappingValueRule {
  /**
   * Disallow empty mapping values.
   *
   * @see [no-empty-mapping-value](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-mapping-value.html)
   */
  'yml/no-empty-mapping-value': Rule<[RuleLevel]>;
}
