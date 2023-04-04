import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoOctalEscapeRule = {
  /**
   * Disallow octal escape sequences in string literals.
   *
   * @see [no-octal-escape](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal-escape.html)
   */
  'jsonc/no-octal-escape': Rule<[RuleLevel]>;
};
