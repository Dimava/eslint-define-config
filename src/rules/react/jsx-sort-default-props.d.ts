import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxSortDefaultPropsRule {
  /**
   * Enforce defaultProps declarations alphabetical sorting.
   *
   * @deprecated
   *
   * @see [jsx-sort-default-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-sort-default-props.md)
   */
  'react/jsx-sort-default-props': Rule<
    [
      RuleLevel,
      {
        ignoreCase?: boolean;
      },
    ]
  >;
}
