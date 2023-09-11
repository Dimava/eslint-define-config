import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxNoTargetBlankRule {
  /**
   * Disallow `target="_blank"` attribute without `rel="noreferrer"`.
   *
   * @see [jsx-no-target-blank](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-target-blank.md)
   */
  'react/jsx-no-target-blank': Rule<
    [
      RuleLevel,
      {
        allowReferrer?: boolean;
        enforceDynamicLinks?: 'always' | 'never';
        warnOnSpreadAttributes?: boolean;
        links?: boolean;
        forms?: boolean;
      },
    ]
  >;
}
