import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxNoBindRule {
  /**
   * Disallow `.bind()` or arrow functions in JSX props.
   *
   * @see [jsx-no-bind](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-bind.md)
   */
  'react/jsx-no-bind': Rule<
    [
      RuleLevel,
      {
        allowArrowFunctions?: boolean;
        allowBind?: boolean;
        allowFunctions?: boolean;
        ignoreRefs?: boolean;
        ignoreDOMComponents?: boolean;
      },
    ]
  >;
}
