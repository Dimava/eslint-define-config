import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoRedeclareRule = {
  /**
   * Disallow variable redeclaration.
   *
   * @see [no-redeclare](https://eslint.org/docs/rules/no-redeclare)
   */
  'no-redeclare': Rule<
    [
      RuleLevel,
      {
        builtinGlobals?: boolean;
      },
    ]
  >;
};
