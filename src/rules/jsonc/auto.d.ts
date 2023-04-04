import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type AutoRule = {
  /**
   * Apply jsonc rules similar to your configured ESLint core rules.
   *
   * @see [auto](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/auto.html)
   */
  'jsonc/auto': Rule<[RuleLevel]>;
};
