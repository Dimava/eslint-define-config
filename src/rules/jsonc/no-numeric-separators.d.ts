import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoNumericSeparatorsRule = {
  /**
   * Disallow numeric separators.
   *
   * @see [no-numeric-separators](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-numeric-separators.html)
   */
  'jsonc/no-numeric-separators': Rule<[RuleLevel]>;
};
