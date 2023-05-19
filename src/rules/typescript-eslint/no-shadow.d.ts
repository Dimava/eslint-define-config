import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoShadowRule {
  /**
   * Disallow variable declarations from shadowing variables declared in the outer scope.
   *
   * @see [no-shadow](https://typescript-eslint.io/rules/no-shadow)
   */
  '@typescript-eslint/no-shadow': Rule<
    [
      RuleLevel,
      {
        builtinGlobals?: boolean;
        hoist?: 'all' | 'functions' | 'never';
        allow?: string[];
        ignoreOnInitialization?: boolean;
        ignoreTypeValueShadow?: boolean;
        ignoreFunctionTypeParameterNameValueShadow?: boolean;
      },
    ]
  >;
}
