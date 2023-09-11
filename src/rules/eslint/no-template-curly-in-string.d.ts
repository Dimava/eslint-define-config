import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoTemplateCurlyInStringRule {
  /**
   * Disallow template literal placeholder syntax in regular strings.
   *
   * @see [no-template-curly-in-string](https://eslint.org/docs/latest/rules/no-template-curly-in-string)
   */
  'no-template-curly-in-string': Rule<[RuleLevel]>;
}
