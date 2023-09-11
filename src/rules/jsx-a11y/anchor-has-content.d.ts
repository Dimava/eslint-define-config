import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface AnchorHasContentRule {
  /**
   * Enforce all anchors to contain accessible content.
   *
   * @see [anchor-has-content](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-has-content.md)
   */
  'jsx-a11y/anchor-has-content': Rule<
    [
      RuleLevel,
      {
        components?: string[];
        [k: string]: any;
      },
    ]
  >;
}
