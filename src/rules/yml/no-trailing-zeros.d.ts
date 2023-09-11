import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoTrailingZerosRule {
  /**
   * Disallow trailing zeros for floats.
   *
   * @see [no-trailing-zeros](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-trailing-zeros.html)
   */
  'yml/no-trailing-zeros': Rule<[RuleLevel]>;
}
