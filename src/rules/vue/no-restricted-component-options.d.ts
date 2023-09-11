import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRestrictedComponentOptionsRule {
  /**
   * Disallow specific component option.
   *
   * @see [no-restricted-component-options](https://eslint.vuejs.org/rules/no-restricted-component-options.html)
   */
  'vue/no-restricted-component-options': Rule<
    [
      RuleLevel,
      .../**
       * @minItems 0
       */
      (
        | string
        | string[]
        | {
            name: string | string[];
            message?: string;
          }
      )[],
    ]
  >;
}
