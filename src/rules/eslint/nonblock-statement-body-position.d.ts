import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NonblockStatementBodyPositionRule {
  /**
   * Enforce the location of single-line statements.
   *
   * @see [nonblock-statement-body-position](https://eslint.org/docs/latest/rules/nonblock-statement-body-position)
   */
  'nonblock-statement-body-position': Rule<
    [
      RuleLevel,
      'beside' | 'below' | 'any',
      {
        overrides?: {
          if?: 'beside' | 'below' | 'any';
          else?: 'beside' | 'below' | 'any';
          while?: 'beside' | 'below' | 'any';
          do?: 'beside' | 'below' | 'any';
          for?: 'beside' | 'below' | 'any';
        };
      },
    ]
  >;
}
