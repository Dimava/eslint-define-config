import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoAnonymousDefaultExportRule = {
  /**
   * Forbid anonymous values as default exports.
   *
   * @see [no-anonymous-default-export](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-anonymous-default-export.md)
   */
  'import/no-anonymous-default-export': Rule<
    [
      RuleLevel,
      {
        /**
         * If `false`, will report default export of an array
         */
        allowArray?: boolean;
        /**
         * If `false`, will report default export of an arrow function
         */
        allowArrowFunction?: boolean;
        /**
         * If `false`, will report default export of a function call
         */
        allowCallExpression?: boolean;
        /**
         * If `false`, will report default export of an anonymous class
         */
        allowAnonymousClass?: boolean;
        /**
         * If `false`, will report default export of an anonymous function
         */
        allowAnonymousFunction?: boolean;
        /**
         * If `false`, will report default export of a literal
         */
        allowLiteral?: boolean;
        /**
         * If `false`, will report default export of an object expression
         */
        allowObject?: boolean;
        /**
         * If `false`, will report default export of a class instantiation
         */
        allowNew?: boolean;
      },
    ]
  >;
};
