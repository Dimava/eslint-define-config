import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxPropsNoMultiSpacesRule {
  /**
   * Disallow multiple spaces between inline JSX props.
   *
   * @see [jsx-props-no-multi-spaces](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-props-no-multi-spaces.md)
   */
  'react/jsx-props-no-multi-spaces': Rule<[RuleLevel]>;
}
