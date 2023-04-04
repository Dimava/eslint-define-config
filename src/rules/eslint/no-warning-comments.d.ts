import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoWarningCommentsRule = {
  /**
   * Disallow specified warning terms in comments.
   *
   * @see [no-warning-comments](https://eslint.org/docs/rules/no-warning-comments)
   */
  'no-warning-comments': Rule<
    [
      RuleLevel,
      {
        terms?: string[];
        location?: 'start' | 'anywhere';
        /**
         * @minItems 1
         */
        decoration?: [string, ...string[]];
      },
    ]
  >;
};
