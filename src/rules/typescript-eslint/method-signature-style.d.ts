import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface MethodSignatureStyleRule {
  /**
   * Enforce using a particular method signature syntax.
   *
   * @see [method-signature-style](https://typescript-eslint.io/rules/method-signature-style)
   */
  '@typescript-eslint/method-signature-style': Rule<
    [RuleLevel, 'property' | 'method']
  >;
}
