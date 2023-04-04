import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoArrayPushPushRule = {
  /**
   * Enforce combining multiple `Array#push()` into one call.
   *
   * @see [no-array-push-push](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-array-push-push.md)
   */
  'unicorn/no-array-push-push': Rule<
    [
      RuleLevel,
      {
        ignore?: any[];
      },
    ]
  >;
};
