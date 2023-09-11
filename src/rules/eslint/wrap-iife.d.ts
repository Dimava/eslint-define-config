import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface WrapIifeRule {
  /**
   * Require parentheses around immediate `function` invocations.
   *
   * @see [wrap-iife](https://eslint.org/docs/latest/rules/wrap-iife)
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
}
