import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface MatchDescriptionRule {
  /**
   * Enforces a regular expression pattern on descriptions.
   *
   * @see [match-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/match-description.md#repos-sticky-header)
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
        nonemptyTags?: boolean;
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
}
