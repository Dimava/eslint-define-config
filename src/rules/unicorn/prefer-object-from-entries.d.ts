import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferObjectFromEntriesRule {
  /**
   * Prefer using `Object.fromEntries(…)` to transform a list of key-value pairs into an object.
   *
   * @see [prefer-object-from-entries](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-object-from-entries.md)
   */
  'unicorn/prefer-object-from-entries': Rule<
    [
      RuleLevel,
      {
        functions?: any[];
      },
    ]
  >;
}
