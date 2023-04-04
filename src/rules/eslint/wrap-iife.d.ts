import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type WrapIifeRule = {
  /**
   * Require parentheses around immediate `function` invocations.
   *
   * @see [wrap-iife](https://eslint.org/docs/rules/wrap-iife)
   */
  'wrap-iife': Rule<
    [
      RuleLevel,
      'outside' | 'inside' | 'any',
      {
        functionPrototypeMethods?: boolean;
      },
    ]
  >;
};
