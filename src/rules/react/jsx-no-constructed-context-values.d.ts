import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxNoConstructedContextValuesRule {
  /**
   * Disallows JSX context provider values from taking values that will cause needless rerenders.
   *
   * @see [jsx-no-constructed-context-values](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-constructed-context-values.md)
   */
  'react/jsx-no-constructed-context-values': Rule<
    [
      RuleLevel,
      ...{
        [k: string]: any;
      },
    ]
  >;
}
