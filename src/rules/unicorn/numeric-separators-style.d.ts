import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NumericSeparatorsStyleRule {
  /**
   * Enforce the style of numeric separators by correctly grouping digits.
   *
   * @see [numeric-separators-style](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/numeric-separators-style.md)
   */
  'unicorn/numeric-separators-style': Rule<
    [
      RuleLevel,
      {
        binary?: {
          onlyIfContainsSeparator?: boolean;
          minimumDigits?: number;
          groupLength?: number;
        };
        octal?: {
          onlyIfContainsSeparator?: boolean;
          minimumDigits?: number;
          groupLength?: number;
        };
        hexadecimal?: {
          onlyIfContainsSeparator?: boolean;
          minimumDigits?: number;
          groupLength?: number;
        };
        number?: {
          onlyIfContainsSeparator?: boolean;
          minimumDigits?: number;
          groupLength?: number;
        };
        onlyIfContainsSeparator?: boolean;
      },
    ]
  >;
}
