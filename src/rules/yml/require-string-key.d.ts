import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireStringKeyRule {
  /**
   * Disallow mapping keys other than strings.
   *
   * @see [require-string-key](https://ota-meshi.github.io/eslint-plugin-yml/rules/require-string-key.html)
   */
  'yml/require-string-key': Rule<[RuleLevel]>;
}
