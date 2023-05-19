import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferPresenceQueriesRule {
  /**
   * Ensure appropriate `get*`/`query*` queries are used with their respective matchers.
   *
   * @see [prefer-presence-queries](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-presence-queries.md)
   */
  'testing-library/prefer-presence-queries': Rule<
    [
      RuleLevel,
      {
        presence?: boolean;
        absence?: boolean;
      },
    ]
  >;
}
