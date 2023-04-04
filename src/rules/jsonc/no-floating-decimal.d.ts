import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoFloatingDecimalRule = {
  /**
   * Disallow leading or trailing decimal points in numeric literals.
   *
   * @see [no-floating-decimal](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-floating-decimal.html)
   */
  'jsonc/no-floating-decimal': Rule<[RuleLevel]>;
};
