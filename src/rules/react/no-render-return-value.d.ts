import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRenderReturnValueRule {
  /**
   * Disallow usage of the return value of ReactDOM.render.
   *
   * @see [no-render-return-value](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-render-return-value.md)
   */
  'react/no-render-return-value': Rule<[RuleLevel]>;
}
