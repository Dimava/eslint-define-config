import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUselessEscapeRule = {
  /**
   * Disallow unnecessary escape usage.
   *
   * @see [no-useless-escape](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-useless-escape.html)
   */
  'jsonc/no-useless-escape': Rule<[RuleLevel]>;
};
