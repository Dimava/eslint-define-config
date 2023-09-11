import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreventAbbreviationsRule {
  /**
   * Prevent abbreviations.
   *
   * @see [prevent-abbreviations](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prevent-abbreviations.md)
   */
  'unicorn/prevent-abbreviations': Rule<
    [
      RuleLevel,
      ...(
        | []
        | [
            {
              checkProperties?: boolean;
              checkVariables?: boolean;
              checkDefaultAndNamespaceImports?: boolean | string;
              checkShorthandImports?: boolean | string;
              checkShorthandProperties?: boolean;
              checkFilenames?: boolean;
              extendDefaultReplacements?: boolean;
              replacements?: Abbreviations;
              extendDefaultAllowList?: boolean;
              allowList?: BooleanObject;
              ignore?: any[];
            },
          ]
      ),
    ]
  >;
}
type Replacements = false | BooleanObject;

interface Abbreviations {
  [k: string]: Replacements;
}
interface BooleanObject {
  [k: string]: boolean;
}
