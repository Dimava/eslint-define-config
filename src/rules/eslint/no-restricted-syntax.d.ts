import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRestrictedSyntaxRule {
  /**
   * Disallow specified syntax.
   *
   * @see [no-restricted-syntax](https://eslint.org/docs/rules/no-restricted-syntax)
   */
  'no-restricted-syntax': Rule<
    [
      RuleLevel,
      .../**
       * @minItems 0
       */
      (
        | string
        | {
            selector: string;
            message?: string;
          }
      )[],
    ]
  >;
}
