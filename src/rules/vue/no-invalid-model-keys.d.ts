import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoInvalidModelKeysRule = {
  /**
   * Require valid keys in model option.
   *
   * @deprecated
   *
   * @see [no-invalid-model-keys](https://eslint.vuejs.org/rules/no-invalid-model-keys.html)
   */
  'vue/no-invalid-model-keys': Rule<[RuleLevel]>;
};
