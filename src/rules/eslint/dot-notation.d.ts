import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface DotNotationRule {
  /**
   * Enforce dot notation whenever possible.
   *
   * @see [dot-notation](https://eslint.org/docs/rules/dot-notation)
   */
  'dot-notation': Rule<
    [
      RuleLevel,
      {
        allowKeywords?: boolean;
        allowPattern?: string;
      },
    ]
  >;
}
