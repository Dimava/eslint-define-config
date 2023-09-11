import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoNoninteractiveTabindexRule {
  /**
   * `tabIndex` should only be declared on interactive elements.
   *
   * @see [no-noninteractive-tabindex](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-tabindex.md)
   */
  'jsx-a11y/no-noninteractive-tabindex': Rule<
    [
      RuleLevel,
      {
        /**
         * An array of ARIA roles
         */
        roles?: string[];
        /**
         * An array of HTML tag names
         */
        tags?: string[];
        [k: string]: any;
      },
    ]
  >;
}
