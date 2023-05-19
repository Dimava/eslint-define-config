import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoInfinityRule {
  /**
   * Disallow Infinity.
   *
   * @see [no-infinity](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-infinity.html)
   */
  'jsonc/no-infinity': Rule<[RuleLevel]>;
}
