import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnnecessaryTypeAssertionRule {
  /**
   * Disallow type assertions that do not change the type of an expression.
   *
   * @see [no-unnecessary-type-assertion](https://typescript-eslint.io/rules/no-unnecessary-type-assertion)
   */
  '@typescript-eslint/no-unnecessary-type-assertion': Rule<
    [
      RuleLevel,
      {
        /**
         * A list of type names to ignore.
         */
        typesToIgnore?: string[];
        [k: string]: any;
      },
    ]
  >;
}
