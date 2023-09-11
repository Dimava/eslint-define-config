import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferExactPropsRule {
  /**
   * Prefer exact proptype definitions.
   *
   * @see [prefer-exact-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-exact-props.md)
   */
  'react/prefer-exact-props': Rule<[RuleLevel]>;
}
