import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRestrictedStaticAttributeRule {
  /**
   * Disallow specific attribute.
   *
   * @see [no-restricted-static-attribute](https://eslint.vuejs.org/rules/no-restricted-static-attribute.html)
   */
  'vue/no-restricted-static-attribute': Rule<
    [
      RuleLevel,
      .../**
       * @minItems 0
       */
      (
        | string
        | {
            key: string;
            value?: string | true;
            element?: string;
            message?: string;
          }
      )[],
    ]
  >;
}
