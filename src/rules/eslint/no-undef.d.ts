import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUndefRule = {
  /**
   * Disallow the use of undeclared variables unless mentioned in `/*global ` comments.
   *
   * @see [no-undef](https://eslint.org/docs/rules/no-undef)
   */
  'no-undef': Rule<
    [
      RuleLevel,
      {
        typeof?: boolean;
      },
    ]
  >;
};
