import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface FlowMappingCurlyNewlineRule {
  /**
   * Enforce consistent line breaks inside braces.
   *
   * @see [flow-mapping-curly-newline](https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-mapping-curly-newline.html)
   */
  'yml/flow-mapping-curly-newline': Rule<
    [
      RuleLevel,
      (
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minProperties?: number;
            consistent?: boolean;
          }
      ),
    ]
  >;
}
