import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxNoDuplicatePropsRule {
  /**
   * Disallow duplicate properties in JSX.
   *
   * @see [jsx-no-duplicate-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-duplicate-props.md)
   */
  'react/jsx-no-duplicate-props': Rule<
    [
      RuleLevel,
      {
        ignoreCase?: boolean;
      },
    ]
  >;
}
