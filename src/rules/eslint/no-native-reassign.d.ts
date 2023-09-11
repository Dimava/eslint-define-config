import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoNativeReassignRule {
  /**
   * Disallow assignments to native objects or read-only global variables.
   *
   * @deprecated
   *
   * @see [no-native-reassign](https://eslint.org/docs/latest/rules/no-native-reassign)
   */
  'no-native-reassign': Rule<
    [
      RuleLevel,
      {
        exceptions?: string[];
      },
    ]
  >;
}
