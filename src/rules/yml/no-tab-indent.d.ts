import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoTabIndentRule {
  /**
   * Disallow tabs for indentation.
   *
   * @see [no-tab-indent](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-tab-indent.html)
   */
  'yml/no-tab-indent': Rule<[RuleLevel]>;
}
