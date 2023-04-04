import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoPlusSignRule = {
  /**
   * Disallow plus sign.
   *
   * @see [no-plus-sign](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-plus-sign.html)
   */
  'jsonc/no-plus-sign': Rule<[RuleLevel]>;
};
