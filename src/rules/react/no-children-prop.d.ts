import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoChildrenPropRule {
  /**
   * Disallow passing of children as props.
   *
   * @see [no-children-prop](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-children-prop.md)
   */
  'react/no-children-prop': Rule<
    [
      RuleLevel,
      {
        allowFunctions?: boolean;
      },
    ]
  >;
}
