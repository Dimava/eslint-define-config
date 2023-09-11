import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxNoLeakedRenderRule {
  /**
   * Disallow problematic leaked values from being rendered.
   *
   * @see [jsx-no-leaked-render](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-leaked-render.md)
   */
  'react/jsx-no-leaked-render': Rule<
    [
      RuleLevel,
      {
        validStrategies?: ('ternary' | 'coerce')[];
      },
    ]
  >;
}
