import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface StringContentRule {
  /**
   * Enforce better string content.
   *
   * @see [string-content](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/string-content.md)
   */
  'unicorn/string-content': Rule<
    [
      RuleLevel,
      {
        patterns?: {
          [k: string]:
            | string
            | {
                suggest: string;
                fix?: boolean;
                message?: string;
              };
        };
      },
    ]
  >;
}
