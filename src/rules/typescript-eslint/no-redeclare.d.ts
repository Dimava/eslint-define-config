import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoRedeclareRule = {
  /**
   * Disallow variable redeclaration.
   *
   * @see [no-redeclare](https://typescript-eslint.io/rules/no-redeclare)
   */
  '@typescript-eslint/no-redeclare': Rule<
    [
      RuleLevel,
      {
        builtinGlobals?: boolean;
        ignoreDeclarationMerge?: boolean;
      },
    ]
  >;
};
