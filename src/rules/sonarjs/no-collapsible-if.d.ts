import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoCollapsibleIfRule {
  /**
   * Collapsible "if" statements should be merged.
   *
   * @see [no-collapsible-if](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-collapsible-if.md)
   */
  'sonarjs/no-collapsible-if': Rule<[RuleLevel, 'sonar-runtime']>;
}
