import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface HeadingHasContentRule {
  /**
   * Enforce heading (`h1`, `h2`, etc) elements contain accessible content.
   *
   * @see [heading-has-content](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/heading-has-content.md)
   */
  'jsx-a11y/heading-has-content': Rule<
    [
      RuleLevel,
      {
        components?: string[];
        [k: string]: any;
      },
    ]
  >;
}
