import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type JsxQuotesRule = {
  /**
   * Enforce the consistent use of either double or single quotes in JSX attributes.
   *
   * @see [jsx-quotes](https://eslint.org/docs/rules/jsx-quotes)
   */
  'jsx-quotes': Rule<[RuleLevel, 'prefer-single' | 'prefer-double']>;
};
