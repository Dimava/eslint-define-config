import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type RequireDirectExportRule = {
  /**
   * Require the component to be directly exported.
   *
   * @see [require-direct-export](https://eslint.vuejs.org/rules/require-direct-export.html)
   */
  'vue/require-direct-export': Rule<
    [
      RuleLevel,
      {
        disallowFunctionalComponentFunction?: boolean;
      },
    ]
  >;
};
