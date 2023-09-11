import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxSortPropsRule {
  /**
   * Enforce props alphabetical sorting.
   *
   * @see [jsx-sort-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-sort-props.md)
   */
  'react/jsx-sort-props': Rule<
    [
      RuleLevel,
      {
        callbacksLast?: boolean;
        shorthandFirst?: boolean;
        shorthandLast?: boolean;
        multiline?: 'ignore' | 'first' | 'last';
        ignoreCase?: boolean;
        noSortAlphabetically?: boolean;
        reservedFirst?: any[] | boolean;
        locale?: string;
      },
    ]
  >;
}
