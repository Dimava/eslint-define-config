import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface IdLengthRule {
  /**
   * Enforce minimum and maximum identifier lengths.
   *
   * @see [id-length](https://eslint.org/docs/latest/rules/id-length)
   */
  'id-length': Rule<
    [
      RuleLevel,
      {
        min?: number;
        max?: number;
        exceptions?: string[];
        exceptionPatterns?: string[];
        properties?: 'always' | 'never';
      },
    ]
  >;
}
