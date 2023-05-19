import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnusedClassComponentMethodsRule {
  /**
   * Disallow declaring unused methods of component class.
   *
   * @see [no-unused-class-component-methods](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unused-class-component-methods.md)
   */
  'react/no-unused-class-component-methods': Rule<[RuleLevel]>;
}
