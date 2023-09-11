import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDistractingElementsRule {
  /**
   * Enforce distracting elements are not used.
   *
   * @see [no-distracting-elements](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-distracting-elements.md)
   */
  'jsx-a11y/no-distracting-elements': Rule<
    [
      RuleLevel,
      {
        /**
         * @minItems 0
         */
        elements?: ('marquee' | 'blink')[];
        [k: string]: any;
      },
    ]
  >;
}
