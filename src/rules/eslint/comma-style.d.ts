import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface CommaStyleRule {
  /**
   * Enforce consistent comma style.
   *
   * @see [comma-style](https://eslint.org/docs/latest/rules/comma-style)
   */
  'comma-style': Rule<
    [
      RuleLevel,
      'first' | 'last',
      {
        exceptions?: {
          [k: string]: boolean;
        };
      },
    ]
  >;
}
