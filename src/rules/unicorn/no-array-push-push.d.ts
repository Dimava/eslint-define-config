import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoArrayPushPushRule {
  /**
   * Enforce combining multiple `Array#push()` into one call.
   *
   * @see [no-array-push-push](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-array-push-push.md)
   */
  'unicorn/no-array-push-push': Rule<
    [
      RuleLevel,
      {
        ignore?: any[];
      },
    ]
  >;
}
