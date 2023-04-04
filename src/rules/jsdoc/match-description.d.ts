import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type MatchDescriptionRule = {
  /**
   * Enforces a regular expression pattern on descriptions.
   *
   * @see [match-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-match-description)
   */
  'jsdoc/match-description': Rule<
    [
      RuleLevel,
      {
        contexts?: (
          | string
          | {
              comment?: string;
              context?: string;
            }
        )[];
        mainDescription?:
          | string
          | boolean
          | {
              match?: string | boolean;
              message?: string;
            };
        matchDescription?: string;
        message?: string;
        tags?: {
          /**
           */
          [k: string]:
            | string
            | true
            | {
                match?: string | true;
                message?: string;
              };
        };
      },
    ]
  >;
};
