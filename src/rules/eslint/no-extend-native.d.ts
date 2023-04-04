import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoExtendNativeRule = {
  /**
   * Disallow extending native types.
   *
   * @see [no-extend-native](https://eslint.org/docs/rules/no-extend-native)
   */
  'no-extend-native': Rule<
    [
      RuleLevel,
      {
        exceptions?: string[];
      },
    ]
  >;
};
