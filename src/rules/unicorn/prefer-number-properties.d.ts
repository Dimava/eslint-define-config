import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferNumberPropertiesRule {
  /**
   * Prefer `Number` static properties over global ones.
   *
   * @see [prefer-number-properties](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-number-properties.md)
   */
  'unicorn/prefer-number-properties': Rule<
    [
      RuleLevel,
      {
        checkInfinity?: boolean;
      },
    ]
  >;
}
