import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface AriaActivedescendantHasTabindexRule {
  /**
   * Enforce elements with aria-activedescendant are tabbable.
   *
   * @see [aria-activedescendant-has-tabindex](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-activedescendant-has-tabindex.md)
   */
  'jsx-a11y/aria-activedescendant-has-tabindex': Rule<
    [
      RuleLevel,
      {
        [k: string]: any;
      },
    ]
  >;
}
