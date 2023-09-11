import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRedeclareRule {
  /**
   * Disallow variable redeclaration.
   *
   * @see [no-redeclare](https://eslint.org/docs/latest/rules/no-redeclare)
   */
  'no-redeclare': Rule<
    [
      RuleLevel,
      {
        builtinGlobals?: boolean;
      },
    ]
  >;
}
