import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoShadowRule = {
  /**
   * Disallow variable declarations from shadowing variables declared in the outer scope.
   *
   * @see [no-shadow](https://eslint.org/docs/rules/no-shadow)
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
};
