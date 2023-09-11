import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface TemplateCurlySpacingRule {
  /**
   * Require or disallow spacing around embedded expressions of template strings.
   *
   * @see [template-curly-spacing](https://eslint.org/docs/latest/rules/template-curly-spacing)
   */
  'template-curly-spacing': Rule<[RuleLevel, 'always' | 'never']>;
}
