import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoNullRule {
  /**
   * Disallow the use of the `null` literal.
   *
   * @see [no-null](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-null.md)
   */
  'unicorn/no-null': Rule<
    [
      RuleLevel,
      {
        checkStrictEquality?: boolean;
      },
    ]
  >;
}
