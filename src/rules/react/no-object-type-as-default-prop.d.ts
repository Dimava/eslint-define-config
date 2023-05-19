import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoObjectTypeAsDefaultPropRule {
  /**
   * Disallow usage of referential-type variables as default param in functional component.
   *
   * @see [no-object-type-as-default-prop](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-object-type-as-default-prop.md)
   */
  'react/no-object-type-as-default-prop': Rule<[RuleLevel]>;
}
