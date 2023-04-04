import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type FuncStyleRule = {
  /**
   * Enforce the consistent use of either `function` declarations or expressions.
   *
   * @see [func-style](https://eslint.org/docs/rules/func-style)
   */
  'func-style': Rule<
    [
      RuleLevel,
      'declaration' | 'expression',
      {
        allowArrowFunctions?: boolean;
      },
    ]
  >;
};
