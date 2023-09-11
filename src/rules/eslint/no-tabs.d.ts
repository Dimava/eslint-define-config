import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoTabsRule {
  /**
   * Disallow all tabs.
   *
   * @see [no-tabs](https://eslint.org/docs/latest/rules/no-tabs)
   */
  'no-tabs': Rule<
    [
      RuleLevel,
      {
        allowIndentationTabs?: boolean;
      },
    ]
  >;
}
