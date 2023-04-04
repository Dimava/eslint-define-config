import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoPugControlFlowRule = {
  /**
   * Disallow pug control flow features.
   *
   * @see [no-pug-control-flow](https://eslint-plugin-vue-pug.rash.codes/rules/no-pug-control-flow.html)
   */
  'vue-pug/no-pug-control-flow': Rule<[RuleLevel]>;
};
