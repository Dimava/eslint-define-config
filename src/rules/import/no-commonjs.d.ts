import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoCommonjsRule {
  /**
   * Forbid CommonJS `require` calls and `module.exports` or `exports.*`.
   *
   * @see [no-commonjs](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-commonjs.md)
   */
  'import/no-commonjs': Rule<
    [
      RuleLevel,
      ...(
        | []
        | ['allow-primitive-modules']
        | []
        | [
            {
              allowPrimitiveModules?: boolean;
              allowRequire?: boolean;
              allowConditionalRequire?: boolean;
            },
          ]
      ),
    ]
  >;
}
