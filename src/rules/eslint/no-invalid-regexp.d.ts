import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoInvalidRegexpRule = {
  /**
   * Disallow invalid regular expression strings in `RegExp` constructors.
   *
   * @see [no-invalid-regexp](https://eslint.org/docs/rules/no-invalid-regexp)
   */
  'no-invalid-regexp': Rule<
    [
      RuleLevel,
      {
        allowConstructorFlags?: string[];
      },
    ]
  >;
};
