import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface BetterRegexRule {
  /**
   * Improve regexes by making them shorter, consistent, and safer.
   *
   * @see [better-regex](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/better-regex.md)
   */
  'unicorn/better-regex': Rule<
    [
      RuleLevel,
      {
        sortCharacterClasses?: boolean;
      },
    ]
  >;
}
