import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRestrictedCallAfterAwaitRule {
  /**
   * Disallow asynchronously called restricted methods.
   *
   * @see [no-restricted-call-after-await](https://eslint.vuejs.org/rules/no-restricted-call-after-await.html)
   */
  'vue/no-restricted-call-after-await': Rule<
    [
      RuleLevel,
      .../**
       * @minItems 0
       */
      {
        module: string;
        path?: string | string[];
        message?: string;
      }[],
    ]
  >;
}
