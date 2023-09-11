import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoExtraBooleanCastRule {
  /**
   * Disallow unnecessary boolean casts.
   *
   * @see [no-extra-boolean-cast](https://eslint.org/docs/latest/rules/no-extra-boolean-cast)
   */
  'no-extra-boolean-cast': Rule<
    [
      RuleLevel,
      {
        enforceForLogicalOperands?: boolean;
      },
    ]
  >;
}
