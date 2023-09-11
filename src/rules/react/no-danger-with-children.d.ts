import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDangerWithChildrenRule {
  /**
   * Disallow when a DOM element is using both children and dangerouslySetInnerHTML.
   *
   * @see [no-danger-with-children](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-danger-with-children.md)
   */
  'react/no-danger-with-children': Rule<[RuleLevel]>;
}
