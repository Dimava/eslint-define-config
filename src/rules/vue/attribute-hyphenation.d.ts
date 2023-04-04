import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type AttributeHyphenationRule = {
  /**
   * Enforce attribute naming style on custom components in template.
   *
   * @see [attribute-hyphenation](https://eslint.vuejs.org/rules/attribute-hyphenation.html)
   */
  'vue/attribute-hyphenation': Rule<
    [
      RuleLevel,
      'always' | 'never',
      {
        ignore?: (string & {
          [k: string]: any;
        } & {
          [k: string]: any;
        })[];
      },
    ]
  >;
};
