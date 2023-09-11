import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ExplicitLengthCheckRule {
  /**
   * Enforce explicitly comparing the `length` or `size` property of a value.
   *
   * @see [explicit-length-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/explicit-length-check.md)
   */
  'unicorn/explicit-length-check': Rule<
    [
      RuleLevel,
      {
        'non-zero'?: 'greater-than' | 'not-equal';
      },
    ]
  >;
}
