import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxPropsNoSpreadingRule {
  /**
   * Disallow JSX prop spreading.
   *
   * @see [jsx-props-no-spreading](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-props-no-spreading.md)
   */
  'react/jsx-props-no-spreading': Rule<
    [
      RuleLevel,
      {
        html?: 'enforce' | 'ignore';
        custom?: 'enforce' | 'ignore';
        exceptions?: string[];
        [k: string]: any;
      },
    ]
  >;
}
