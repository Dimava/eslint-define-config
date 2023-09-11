import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxUsesVarsRule {
  /**
   * Prevent variables used in JSX to be marked as unused.
   *
   * @see [jsx-uses-vars](https://eslint.vuejs.org/rules/jsx-uses-vars.html)
   */
  'vue/jsx-uses-vars': Rule<[RuleLevel]>;
}
