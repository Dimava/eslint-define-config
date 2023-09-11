import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoInvalidHtmlAttributeRule {
  /**
   * Disallow usage of invalid attributes.
   *
   * @see [no-invalid-html-attribute](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-invalid-html-attribute.md)
   */
  'react/no-invalid-html-attribute': Rule<[RuleLevel, 'rel'[]]>;
}
