import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ValidTitleRule {
  /**
   * Enforce valid titles.
   *
   * @see [valid-title](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-title.md)
   */
  'vitest/valid-title': Rule<
    [
      RuleLevel,
      {
        ignoreTypeOfDescribeName?: boolean;
        allowArguments?: boolean;
        disallowedWords?: string[];
        /**
         */
        [k: string]:
          | string
          | [string]
          | [string, string]
          | {
              [k: string]: string | [string] | [string, string];
            };
      },
    ]
  >;
}
