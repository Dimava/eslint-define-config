import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUseComputedPropertyLikeMethodRule {
  /**
   * Disallow use computed property like method.
   *
   * @see [no-use-computed-property-like-method](https://eslint.vuejs.org/rules/no-use-computed-property-like-method.html)
   */
  'vue/no-use-computed-property-like-method': Rule<[RuleLevel]>;
}
