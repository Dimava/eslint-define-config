import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireRenderReturnRule {
  /**
   * Enforce ES5 or ES6 class for returning value in render function.
   *
   * @see [require-render-return](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-render-return.md)
   */
  'react/require-render-return': Rule<[RuleLevel]>;
}
