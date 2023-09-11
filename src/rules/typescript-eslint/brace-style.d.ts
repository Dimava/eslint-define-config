import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface BraceStyleRule {
  /**
   * Enforce consistent brace style for blocks.
   *
   * @see [brace-style](https://typescript-eslint.io/rules/brace-style)
   */
  '@typescript-eslint/brace-style': Rule<
    [
      RuleLevel,
      '1tbs' | 'stroustrup' | 'allman',
      {
        allowSingleLine?: boolean;
      },
    ]
  >;
}
