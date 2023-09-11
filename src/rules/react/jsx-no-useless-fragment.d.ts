import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxNoUselessFragmentRule {
  /**
   * Disallow unnecessary fragments.
   *
   * @see [jsx-no-useless-fragment](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-useless-fragment.md)
   */
  'react/jsx-no-useless-fragment': Rule<
    [
      RuleLevel,
      {
        allowExpressions?: boolean;
        [k: string]: any;
      },
    ]
  >;
}
