import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoEmptyFunctionRule {
  /**
   * Disallow empty functions.
   *
   * @see [no-empty-function](https://eslint.org/docs/rules/no-empty-function)
   */
  'no-empty-function': Rule<
    [
      RuleLevel,
      {
        allow?: (
          | 'functions'
          | 'arrowFunctions'
          | 'generatorFunctions'
          | 'methods'
          | 'generatorMethods'
          | 'getters'
          | 'setters'
          | 'constructors'
          | 'asyncFunctions'
          | 'asyncMethods'
        )[];
      },
    ]
  >;
}
