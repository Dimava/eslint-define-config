import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type FunctionCallArgumentNewlineRule = {
  /**
   * Enforce line breaks between arguments of a function call.
   *
   * @see [function-call-argument-newline](https://eslint.org/docs/rules/function-call-argument-newline)
   */
  'function-call-argument-newline': Rule<
    [RuleLevel, 'always' | 'never' | 'consistent']
  >;
};
