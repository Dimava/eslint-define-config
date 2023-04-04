import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type StringContentRule = {
  /**
   * Enforce better string content.
   *
   * @see [string-content](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/string-content.md)
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
};
