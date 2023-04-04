import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoIrregularWhitespaceRule = {
  /**
   * Disallow irregular whitespace.
   *
   * @see [no-irregular-whitespace](https://eslint.org/docs/rules/no-irregular-whitespace)
   */
  'no-irregular-whitespace': Rule<
    [
      RuleLevel,
      {
        skipComments?: boolean;
        skipStrings?: boolean;
        skipTemplates?: boolean;
        skipRegExps?: boolean;
      },
    ]
  >;
};
