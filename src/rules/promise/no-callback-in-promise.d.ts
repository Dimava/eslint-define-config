import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoCallbackInPromiseRule = {
  /**
   *
   * @see [no-callback-in-promise](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-callback-in-promise.md)
   */
  'promise/no-callback-in-promise': Rule<
    [
      RuleLevel,
      {
        exceptions?: string[];
      },
    ]
  >;
};
