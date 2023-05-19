import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface CheckExamplesRule {
  /**
   * Ensures that (JavaScript) examples within JSDoc adhere to ESLint rules.
   *
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-examples)
   */
  'jsdoc/check-examples': Rule<
    [
      RuleLevel,
      {
        allowInlineConfig?: boolean;
        baseConfig?: {
          [k: string]: any;
        };
        captionRequired?: boolean;
        checkDefaults?: boolean;
        checkEslintrc?: boolean;
        checkParams?: boolean;
        checkProperties?: boolean;
        configFile?: string;
        exampleCodeRegex?: string;
        matchingFileName?: string;
        matchingFileNameDefaults?: string;
        matchingFileNameParams?: string;
        matchingFileNameProperties?: string;
        noDefaultExampleRules?: boolean;
        paddedIndent?: number;
        rejectExampleCodeRegex?: string;
        reportUnusedDisableDirectives?: boolean;
      },
    ]
  >;
}
