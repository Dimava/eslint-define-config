import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoBinaryNumericLiteralsRule = {
  /**
   * Disallow binary numeric literals.
   *
   * @see [no-binary-numeric-literals](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-binary-numeric-literals.html)
   */
  'jsonc/no-binary-numeric-literals': Rule<[RuleLevel]>;
};
