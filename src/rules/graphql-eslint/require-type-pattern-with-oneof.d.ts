import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireTypePatternWithOneofRule {
  /**
   * Enforce types with `@oneOf` directive have `error` and `ok` fields.
   *
   * @see [require-type-pattern-with-oneof](https://the-guild.dev/graphql/eslint/rules/require-type-pattern-with-oneof)
   */
  '@graphql-eslint/require-type-pattern-with-oneof': Rule<[RuleLevel]>;
}
