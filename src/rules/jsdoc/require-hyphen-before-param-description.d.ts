import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type RequireHyphenBeforeParamDescriptionRule = {
  /**
   * Requires a hyphen before the `@param` description.
   *
   * @see [require-hyphen-before-param-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-hyphen-before-param-description)
   */
  'jsdoc/require-hyphen-before-param-description': Rule<
    [
      RuleLevel,
      'always' | 'never',
      {
        tags?:
          | {
              /**
               */
              [k: string]: 'always' | 'never';
            }
          | 'any';
      },
    ]
  >;
};
