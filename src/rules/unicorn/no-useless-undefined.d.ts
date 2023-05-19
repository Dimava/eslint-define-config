import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUselessUndefinedRule {
  /**
   * Disallow useless `undefined`.
   *
   * @see [no-useless-undefined](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-useless-undefined.md)
   */
  'unicorn/no-useless-undefined': Rule<
    [
      RuleLevel,
      {
        checkArguments?: boolean;
      },
    ]
  >;
}
