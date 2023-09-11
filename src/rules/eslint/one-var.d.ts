import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface OneVarRule {
  /**
   * Enforce variables to be declared either together or separately in functions.
   *
   * @see [one-var](https://eslint.org/docs/latest/rules/one-var)
   */
  'one-var': Rule<
    [
      RuleLevel,
      (
        | ('always' | 'never' | 'consecutive')
        | {
            separateRequires?: boolean;
            var?: 'always' | 'never' | 'consecutive';
            let?: 'always' | 'never' | 'consecutive';
            const?: 'always' | 'never' | 'consecutive';
          }
        | {
            initialized?: 'always' | 'never' | 'consecutive';
            uninitialized?: 'always' | 'never' | 'consecutive';
          }
      ),
    ]
  >;
}
