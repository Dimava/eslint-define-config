import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoShadowRule {
  /**
   * Disallow variable declarations from shadowing variables declared in the outer scope.
   *
   * @see [no-shadow](https://eslint.org/docs/latest/rules/no-shadow)
   */
  'no-shadow': Rule<
    [
      RuleLevel,
      {
        builtinGlobals?: boolean;
        hoist?: 'all' | 'functions' | 'never';
        allow?: string[];
        ignoreOnInitialization?: boolean;
      },
    ]
  >;
}
