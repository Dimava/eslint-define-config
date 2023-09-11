import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface MustacheInterpolationSpacingRule {
  /**
   * Enforce unified spacing in mustache interpolations.
   *
   * @see [mustache-interpolation-spacing](https://eslint.vuejs.org/rules/mustache-interpolation-spacing.html)
   */
  'vue/mustache-interpolation-spacing': Rule<[RuleLevel, 'always' | 'never']>;
}
