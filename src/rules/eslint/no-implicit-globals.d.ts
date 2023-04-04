import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoImplicitGlobalsRule = {
  /**
   * Disallow declarations in the global scope.
   *
   * @see [no-implicit-globals](https://eslint.org/docs/rules/no-implicit-globals)
   */
  'no-implicit-globals': Rule<
    [
      RuleLevel,
      {
        lexicalBindings?: boolean;
      },
    ]
  >;
};
