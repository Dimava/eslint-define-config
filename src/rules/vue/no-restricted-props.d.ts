import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRestrictedPropsRule {
  /**
   * Disallow specific props.
   *
   * @see [no-restricted-props](https://eslint.vuejs.org/rules/no-restricted-props.html)
   */
  'vue/no-restricted-props': Rule<
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
