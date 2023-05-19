import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRequiredPropWithDefaultRule {
  /**
   * Enforce props with default values to be optional.
   *
   * @see [no-required-prop-with-default](https://eslint.vuejs.org/rules/no-required-prop-with-default.html)
   */
  'vue/no-required-prop-with-default': Rule<
    [
      RuleLevel,
      {
        autofix?: boolean;
      },
    ]
  >;
}
