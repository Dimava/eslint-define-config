import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface IframeHasTitleRule {
  /**
   * Enforce iframe elements have a title attribute.
   *
   * @see [iframe-has-title](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/iframe-has-title.md)
   */
  'jsx-a11y/iframe-has-title': Rule<
    [
      RuleLevel,
      {
        [k: string]: any;
      },
    ]
  >;
}
