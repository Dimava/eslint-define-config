import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoNewNativeNonconstructorRule {
  /**
   * Disallow `new` operators with global non-constructor functions.
   *
   * @see [no-new-native-nonconstructor](https://eslint.org/docs/latest/rules/no-new-native-nonconstructor)
   */
  'no-new-native-nonconstructor': Rule<[RuleLevel]>;
}
