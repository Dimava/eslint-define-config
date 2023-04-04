import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ValidJsonNumberRule = {
  /**
   * Disallow invalid number for JSON.
   *
   * @see [valid-json-number](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/valid-json-number.html)
   */
  'jsonc/valid-json-number': Rule<[RuleLevel]>;
};
