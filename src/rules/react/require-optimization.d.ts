import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireOptimizationRule {
  /**
   * Enforce React components to have a shouldComponentUpdate method.
   *
   * @see [require-optimization](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-optimization.md)
   */
  'react/require-optimization': Rule<
    [
      RuleLevel,
      {
        allowDecorators?: string[];
      },
    ]
  >;
}
