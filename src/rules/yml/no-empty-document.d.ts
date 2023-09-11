import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoEmptyDocumentRule {
  /**
   * Disallow empty document.
   *
   * @see [no-empty-document](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-document.html)
   */
  'yml/no-empty-document': Rule<[RuleLevel]>;
}
