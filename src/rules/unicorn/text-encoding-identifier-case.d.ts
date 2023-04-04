import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type TextEncodingIdentifierCaseRule = {
  /**
   * Enforce consistent case for text encoding identifiers.
   *
   * @see [text-encoding-identifier-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/text-encoding-identifier-case.md)
   */
  'unicorn/text-encoding-identifier-case': Rule<[RuleLevel]>;
};
