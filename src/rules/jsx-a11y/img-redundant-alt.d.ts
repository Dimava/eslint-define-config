import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ImgRedundantAltRule {
  /**
   * Enforce `<img>` alt prop does not contain the word "image", "picture", or "photo".
   *
   * @see [img-redundant-alt](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/img-redundant-alt.md)
   */
  'jsx-a11y/img-redundant-alt': Rule<
    [
      RuleLevel,
      {
        components?: string[];
        words?: string[];
        [k: string]: any;
      },
    ]
  >;
}
