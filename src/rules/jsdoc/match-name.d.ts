import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface MatchNameRule {
  /**
   * Reports the name portion of a JSDoc tag if matching or not matching a given regular expression.
   *
   * @see [match-name](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/match-name.md#repos-sticky-header)
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
      },
    ]
  >;
}
