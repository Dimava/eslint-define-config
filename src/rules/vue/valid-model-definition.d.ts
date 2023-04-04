import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ValidModelDefinitionRule = {
  /**
   * Require valid keys in model option.
   *
   * @see [valid-model-definition](https://eslint.vuejs.org/rules/valid-model-definition.html)
   */
  'vue/valid-model-definition': Rule<[RuleLevel]>;
};
