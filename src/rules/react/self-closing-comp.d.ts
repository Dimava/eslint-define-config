import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface SelfClosingCompRule {
  /**
   * Disallow extra closing tags for components without children.
   *
   * @see [self-closing-comp](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/self-closing-comp.md)
   */
  'react/self-closing-comp': Rule<
    [
      RuleLevel,
      {
        component?: boolean;
        html?: boolean;
      },
    ]
  >;
}
