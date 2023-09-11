import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRestrictedBlockRule {
  /**
   * Disallow specific block.
   *
   * @see [no-restricted-block](https://eslint.vuejs.org/rules/no-restricted-block.html)
   */
  'vue/no-restricted-block': Rule<
    [
      RuleLevel,
      .../**
       * @minItems 0
       */
      (
        | string
        | {
            element: string;
            message?: string;
          }
      )[],
    ]
  >;
}
