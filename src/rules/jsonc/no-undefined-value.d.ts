import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUndefinedValueRule {
  /**
   * Disallow `undefined`.
   *
   * @see [no-undefined-value](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-undefined-value.html)
   */
  'jsonc/no-undefined-value': Rule<[RuleLevel]>;
}
