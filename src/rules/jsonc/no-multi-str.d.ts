import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoMultiStrRule {
  /**
   * Disallow multiline strings.
   *
   * @see [no-multi-str](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-multi-str.html)
   */
  'jsonc/no-multi-str': Rule<[RuleLevel]>;
}
