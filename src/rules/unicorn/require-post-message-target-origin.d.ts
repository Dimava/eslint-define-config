import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequirePostMessageTargetOriginRule {
  /**
   * Enforce using the `targetOrigin` argument with `window.postMessage()`.
   *
   * @see [require-post-message-target-origin](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/require-post-message-target-origin.md)
   */
  'unicorn/require-post-message-target-origin': Rule<[RuleLevel]>;
}
