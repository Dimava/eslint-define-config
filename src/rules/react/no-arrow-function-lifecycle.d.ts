import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoArrowFunctionLifecycleRule {
  /**
   * Lifecycle methods should be methods on the prototype, not class fields.
   *
   * @see [no-arrow-function-lifecycle](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-arrow-function-lifecycle.md)
   */
  'react/no-arrow-function-lifecycle': Rule<[RuleLevel]>;
}
