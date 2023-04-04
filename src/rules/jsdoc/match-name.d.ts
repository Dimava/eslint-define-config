import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type MatchNameRule = {
  /**
   * Reports the name portion of a JSDoc tag if matching or not matching a given regular expression.
   *
   * @see [match-name](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-match-name)
   */
  'jsdoc/match-name': Rule<
    [
      RuleLevel,
      {
        match: {
          allowName?: string;
          comment?: string;
          context?: string;
          disallowName?: string;
          message?: string;
          tags?: string[];
          [k: string]: any;
        }[];
        [k: string]: any;
      },
    ]
  >;
};
