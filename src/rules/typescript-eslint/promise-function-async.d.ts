import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PromiseFunctionAsyncRule = {
  /**
   * Require any function or method that returns a Promise to be marked async.
   *
   * @see [promise-function-async](https://typescript-eslint.io/rules/promise-function-async)
   */
  '@typescript-eslint/promise-function-async': Rule<
    [
      RuleLevel,
      {
        /**
         * Whether to consider `any` and `unknown` to be Promises.
         */
        allowAny?: boolean;
        /**
         * Any extra names of classes or interfaces to be considered Promises.
         */
        allowedPromiseNames?: string[];
        checkArrowFunctions?: boolean;
        checkFunctionDeclarations?: boolean;
        checkFunctionExpressions?: boolean;
        checkMethodDeclarations?: boolean;
      },
    ]
  >;
};
