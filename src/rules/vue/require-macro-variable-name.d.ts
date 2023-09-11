import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireMacroVariableNameRule {
  /**
   * Require a certain macro variable name.
   *
   * @see [require-macro-variable-name](https://eslint.vuejs.org/rules/require-macro-variable-name.html)
   */
  'vue/require-macro-variable-name': Rule<
    [
      RuleLevel,
      {
        defineProps?: string;
        defineEmits?: string;
        defineSlots?: string;
        useSlots?: string;
        useAttrs?: string;
      },
    ]
  >;
}
