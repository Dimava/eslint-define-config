import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRestrictedGlobalsRule {
  /**
   * Disallow specified global variables.
   *
   * @see [no-restricted-globals](https://eslint.org/docs/rules/no-restricted-globals)
   */
  'no-restricted-globals': Rule<
    [
      RuleLevel,
      .../**
       * @minItems 0
       */
      (
        | string
        | {
            name: string;
            message?: string;
          }
      )[],
    ]
  >;
}
