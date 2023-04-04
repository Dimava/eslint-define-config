import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type DeprecationRule = {
  /**
   * Do not use deprecated APIs.
   *
   * @see [deprecation](https://github.com/gund/eslint-plugin-deprecation)
   */
  'deprecation/deprecation': Rule<[RuleLevel]>;
};
