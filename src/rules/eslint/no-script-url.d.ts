import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoScriptUrlRule {
  /**
   * Disallow `javascript:` urls.
   *
   * @see [no-script-url](https://eslint.org/docs/rules/no-script-url)
   */
  'no-script-url': Rule<[RuleLevel]>;
}
