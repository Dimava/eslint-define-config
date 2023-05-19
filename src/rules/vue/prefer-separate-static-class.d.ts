import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferSeparateStaticClassRule {
  /**
   * Require static class names in template to be in a separate `class` attribute.
   *
   * @see [prefer-separate-static-class](https://eslint.vuejs.org/rules/prefer-separate-static-class.html)
   */
  'vue/prefer-separate-static-class': Rule<[RuleLevel]>;
}
