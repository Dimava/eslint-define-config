import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface FunctionCallArgumentNewlineRule {
  /**
   * Enforce line breaks between arguments of a function call.
   *
   * @see [function-call-argument-newline](https://eslint.org/docs/latest/rules/function-call-argument-newline)
   */
  'function-call-argument-newline': Rule<
    [RuleLevel, 'always' | 'never' | 'consistent']
  >;
}
