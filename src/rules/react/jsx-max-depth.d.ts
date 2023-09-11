import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxMaxDepthRule {
  /**
   * Enforce JSX maximum depth.
   *
   * @see [jsx-max-depth](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-max-depth.md)
   */
  'react/jsx-max-depth': Rule<
    [
      RuleLevel,
      {
        max?: number;
      },
    ]
  >;
}
