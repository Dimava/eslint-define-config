import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnusedComponentsRule {
  /**
   * Disallow registering components that are not used inside templates.
   *
   * @see [no-unused-components](https://eslint.vuejs.org/rules/no-unused-components.html)
   */
  'vue/no-unused-components': Rule<
    [
      RuleLevel,
      {
        ignoreWhenBindingPresent?: boolean;
      },
    ]
  >;
}
