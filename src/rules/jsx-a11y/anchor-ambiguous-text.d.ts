import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface AnchorAmbiguousTextRule {
  /**
   * Enforce `<a>` text to not exactly match "click here", "here", "link", or "a link".
   *
   * @see [anchor-ambiguous-text](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-ambiguous-text.md)
   */
  'jsx-a11y/anchor-ambiguous-text': Rule<
    [
      RuleLevel,
      {
        words?: string[];
        [k: string]: any;
      },
    ]
  >;
}
