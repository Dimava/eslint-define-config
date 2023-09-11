import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface SortDefaultPropsRule {
  /**
   * Enforce defaultProps declarations alphabetical sorting.
   *
   * @see [sort-default-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-default-props.md)
   */
  'react/sort-default-props': Rule<
    [
      RuleLevel,
      {
        ignoreCase?: boolean;
      },
    ]
  >;
}
