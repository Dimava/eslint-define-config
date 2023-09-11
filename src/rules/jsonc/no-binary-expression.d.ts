import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoBinaryExpressionRule {
  /**
   * Disallow binary expression.
   *
   * @see [no-binary-expression](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-binary-expression.html)
   */
  'jsonc/no-binary-expression': Rule<[RuleLevel]>;
}
