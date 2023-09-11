import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface DisableEnablePairRule {
  /**
   * Require a `eslint-enable` comment for every `eslint-disable` comment.
   *
   * @see [disable-enable-pair](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html)
   */
  'eslint-comments/disable-enable-pair': Rule<
    [
      RuleLevel,
      {
        allowWholeFile?: boolean;
      },
    ]
  >;
}
