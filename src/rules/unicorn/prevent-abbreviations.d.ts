import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreventAbbreviationsRule = {
  /**
   * Prevent abbreviations.
   *
   * @see [prevent-abbreviations](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prevent-abbreviations.md)
   */
  'unicorn/prevent-abbreviations': Rule<
    [
      RuleLevel,
      (
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
};
type Replacements = false | BooleanObject;

interface Abbreviations {
  [k: string]: Replacements;
}
interface BooleanObject {
  [k: string]: boolean;
}
