import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface TemplateTagSpacingRule {
  /**
   * Require or disallow spacing between template tags and their literals.
   *
   * @see [template-tag-spacing](https://eslint.org/docs/latest/rules/template-tag-spacing)
   */
  'template-tag-spacing': Rule<[RuleLevel, 'always' | 'never']>;
}
