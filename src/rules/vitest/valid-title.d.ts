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
        disallowedWords?: string[];
        mustNotMatch?:
          | {
              [K in 'describe' | 'test' | 'it']?:
                | string
                | [matcher: string, message?: string];
            }
          | [matcher: string, message?: string]
          | string;
        mustMatch?:
          | {
              [K in 'describe' | 'test' | 'it']?:
                | string
                | [matcher: string, message?: string];
            }
          | [matcher: string, message?: string]
          | string;
      },
    ]
  >;
}
