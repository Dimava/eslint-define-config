import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoTemplateShadowRule = {
  /**
   * Disallow variable declarations from shadowing variables declared in the outer scope.
   *
   * @see [no-template-shadow](https://eslint.vuejs.org/rules/no-template-shadow.html)
   */
  'vue/no-template-shadow': Rule<[RuleLevel]>;
};
