import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoTemplateLiteralsRule = {
  /**
   * Disallow template literals.
   *
   * @see [no-template-literals](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-template-literals.html)
   */
  'jsonc/no-template-literals': Rule<[RuleLevel]>;
};
