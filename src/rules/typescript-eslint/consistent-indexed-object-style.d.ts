import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ConsistentIndexedObjectStyleRule {
  /**
   * Require or disallow the `Record` type.
   *
   * @see [consistent-indexed-object-style](https://typescript-eslint.io/rules/consistent-indexed-object-style)
   */
  '@typescript-eslint/consistent-indexed-object-style': Rule<
    [RuleLevel, 'record' | 'index-signature']
  >;
}
