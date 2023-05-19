import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRestrictedCustomEventRule {
  /**
   * Disallow specific custom event.
   *
   * @see [no-restricted-custom-event](https://eslint.vuejs.org/rules/no-restricted-custom-event.html)
   */
  'vue/no-restricted-custom-event': Rule<
    [
      RuleLevel,
      .../**
       * @minItems 0
       */
      (
        | string
        | {
            event: string;
            message?: string;
            suggest?: string;
          }
      )[],
    ]
  >;
}
