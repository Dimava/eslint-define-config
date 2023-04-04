import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoCommentsRule = {
  /**
   * Disallow comments.
   *
   * @see [no-comments](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-comments.html)
   */
  'jsonc/no-comments': Rule<[RuleLevel]>;
};
