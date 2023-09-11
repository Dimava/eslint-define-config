import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoEmptySequenceEntryRule {
  /**
   * Disallow empty sequence entries.
   *
   * @see [no-empty-sequence-entry](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-sequence-entry.html)
   */
  'yml/no-empty-sequence-entry': Rule<[RuleLevel]>;
}
