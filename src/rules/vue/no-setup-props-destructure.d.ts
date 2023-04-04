import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoSetupPropsDestructureRule = {
  /**
   * Disallow destructuring of `props` passed to `setup`.
   *
   * @see [no-setup-props-destructure](https://eslint.vuejs.org/rules/no-setup-props-destructure.html)
   */
  'vue/no-setup-props-destructure': Rule<[RuleLevel]>;
};
