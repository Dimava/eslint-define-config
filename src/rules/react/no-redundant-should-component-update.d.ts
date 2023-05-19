import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRedundantShouldComponentUpdateRule {
  /**
   * Disallow usage of shouldComponentUpdate when extending React.PureComponent.
   *
   * @see [no-redundant-should-component-update](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-redundant-should-component-update.md)
   */
  'react/no-redundant-should-component-update': Rule<[RuleLevel]>;
}
