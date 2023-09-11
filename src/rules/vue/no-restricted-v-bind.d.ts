import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRestrictedVBindRule {
  /**
   * Disallow specific argument in `v-bind`.
   *
   * @see [no-restricted-v-bind](https://eslint.vuejs.org/rules/no-restricted-v-bind.html)
   */
  'vue/no-restricted-v-bind': Rule<
    [
      RuleLevel,
      .../**
       * @minItems 0
       */
      (
        | (string | null)
        | {
            argument: string | null;
            modifiers?: ('prop' | 'camel' | 'sync' | 'attr')[];
            element?: string;
            message?: string;
          }
      )[],
    ]
  >;
}
