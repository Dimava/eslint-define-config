import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoNanRule = {
  /**
   * Disallow NaN.
   *
   * @see [no-nan](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-nan.html)
   */
  'jsonc/no-nan': Rule<[RuleLevel]>;
};
