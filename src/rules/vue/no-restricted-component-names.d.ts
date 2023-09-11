import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRestrictedComponentNamesRule {
  /**
   * Disallow specific component names.
   *
   * @see [no-restricted-component-names](https://eslint.vuejs.org/rules/no-restricted-component-names.html)
   */
  'vue/no-restricted-component-names': Rule<
    [
      RuleLevel,
      .../**
       * @minItems 0
       */
      (
        | string
        | {
            name: string;
            message?: string;
            suggest?: string;
          }
      )[],
    ]
  >;
}
