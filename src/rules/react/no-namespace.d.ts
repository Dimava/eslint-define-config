import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoNamespaceRule {
  /**
   * Enforce that namespaces are not used in React elements.
   *
   * @see [no-namespace](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-namespace.md)
   */
  'react/no-namespace': Rule<[RuleLevel]>;
}
