import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoNumberPropsRule {
  /**
   * Disallow number property keys.
   *
   * @see [no-number-props](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-number-props.html)
   */
  'jsonc/no-number-props': Rule<[RuleLevel]>;
}
