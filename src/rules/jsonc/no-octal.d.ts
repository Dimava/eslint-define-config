import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoOctalRule {
  /**
   * Disallow legacy octal literals.
   *
   * @see [no-octal](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal.html)
   */
  'jsonc/no-octal': Rule<[RuleLevel]>;
}
