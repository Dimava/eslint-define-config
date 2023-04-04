import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoTabsRule = {
  /**
   * Disallow all tabs.
   *
   * @see [no-tabs](https://eslint.org/docs/rules/no-tabs)
   */
  'no-tabs': Rule<
    [
      RuleLevel,
      {
        allowIndentationTabs?: boolean;
      },
    ]
  >;
};
