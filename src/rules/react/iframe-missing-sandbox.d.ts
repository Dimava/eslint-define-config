import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface IframeMissingSandboxRule {
  /**
   * Enforce sandbox attribute on iframe elements.
   *
   * @see [iframe-missing-sandbox](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/iframe-missing-sandbox.md)
   */
  'react/iframe-missing-sandbox': Rule<[RuleLevel]>;
}
