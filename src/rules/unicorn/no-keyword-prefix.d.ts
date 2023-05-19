import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoKeywordPrefixRule {
  /**
   * Disallow identifiers starting with `new` or `class`.
   *
   * @see [no-keyword-prefix](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-keyword-prefix.md)
   */
  'unicorn/no-keyword-prefix': Rule<
    [
      RuleLevel,
      {
        /**
         * @minItems 0
         */
        disallowedPrefixes?: [] | [string];
        checkProperties?: boolean;
        onlyCamelCase?: boolean;
      },
    ]
  >;
}
