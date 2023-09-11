import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferReadOnlyPropsRule {
  /**
   * Enforce that props are read-only.
   *
   * @see [prefer-read-only-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-read-only-props.md)
   */
  'react/prefer-read-only-props': Rule<[RuleLevel]>;
}
