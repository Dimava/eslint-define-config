import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoRestrictedHtmlElementsRule = {
  /**
   * Disallow specific HTML elements.
   *
   * @see [no-restricted-html-elements](https://eslint.vuejs.org/rules/no-restricted-html-elements.html)
   */
  'vue/no-restricted-html-elements': Rule<
    [
      RuleLevel,
      /**
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
};
