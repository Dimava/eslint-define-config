import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoEmptyFunctionRule {
  /**
   * Disallow empty functions.
   *
   * @see [no-empty-function](https://typescript-eslint.io/rules/no-empty-function)
   */
  '@typescript-eslint/no-empty-function': Rule<
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
          | 'private-constructors'
          | 'protected-constructors'
          | 'asyncFunctions'
          | 'asyncMethods'
          | 'decoratedFunctions'
          | 'overrideMethods'
        )[];
      },
    ]
  >;
}
