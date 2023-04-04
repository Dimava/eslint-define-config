import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoEscapeSequenceInIdentifierRule = {
  /**
   * Disallow escape sequences in identifiers.
   *
   * @see [no-escape-sequence-in-identifier](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-escape-sequence-in-identifier.html)
   */
  'jsonc/no-escape-sequence-in-identifier': Rule<[RuleLevel]>;
};
