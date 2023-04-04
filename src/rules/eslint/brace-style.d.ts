import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type BraceStyleRule = {
  /**
   * Enforce consistent brace style for blocks.
   *
   * @see [brace-style](https://eslint.org/docs/rules/brace-style)
   */
  'brace-style': Rule<
    [
      RuleLevel,
      '1tbs' | 'stroustrup' | 'allman',
      {
        allowSingleLine?: boolean;
      },
    ]
  >;
};
