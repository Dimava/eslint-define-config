import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUndefRule {
  /**
   * Disallow the use of undeclared variables unless mentioned in `/*global ` comments.
   *
   * @see [no-undef](https://eslint.org/docs/latest/rules/no-undef)
   */
  'no-undef': Rule<
    [
      RuleLevel,
      {
        typeof?: boolean;
      },
    ]
  >;
}
