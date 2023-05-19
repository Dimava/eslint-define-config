import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoAriaHiddenOnFocusableRule {
  /**
   * Disallow `aria-hidden="true"` from being set on focusable elements.
   *
   * @see [no-aria-hidden-on-focusable](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-aria-hidden-on-focusable.md)
   */
  'jsx-a11y/no-aria-hidden-on-focusable': Rule<
    [
      RuleLevel,
      {
        [k: string]: any;
      },
    ]
  >;
}
