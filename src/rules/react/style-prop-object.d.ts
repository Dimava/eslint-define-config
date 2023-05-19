import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface StylePropObjectRule {
  /**
   * Enforce style prop value is an object.
   *
   * @see [style-prop-object](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/style-prop-object.md)
   */
  'react/style-prop-object': Rule<
    [
      RuleLevel,
      {
        allow?: string[];
        [k: string]: any;
      },
    ]
  >;
}
