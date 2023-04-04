import type { Rule } from '../../rule-config';
import type { RuleLevel } from '../../rule-severity';
export type NoUnsupportedFeaturesEsSyntaxRule = {
  /**
   * Disallow unsupported ECMAScript syntax on the specified version.
   *
   * @see [no-unsupported-features/es-syntax](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-unsupported-features/es-syntax.md)
   */
  'n/no-unsupported-features/es-syntax': Rule<
    [
      RuleLevel,
      {
        version?: string;
        ignores?: (
          | 'arrowFunctions'
          | 'binaryNumericLiterals'
          | 'blockScopedFunctions'
          | 'blockScopedVariables'
          | 'classes'
          | 'computedProperties'
          | 'defaultParameters'
          | 'destructuring'
          | 'forOfLoops'
          | 'generators'
          | 'modules'
          | 'new.target'
          | 'objectSuperProperties'
          | 'octalNumericLiterals'
          | 'propertyShorthands'
          | 'regexpU'
          | 'regexpY'
          | 'restParameters'
          | 'spreadElements'
          | 'templateLiterals'
          | 'unicodeCodePointEscapes'
          | 'exponentialOperators'
          | 'asyncFunctions'
          | 'trailingCommasInFunctions'
          | 'asyncIteration'
          | 'malformedTemplateLiterals'
          | 'regexpLookbehind'
          | 'regexpNamedCaptureGroups'
          | 'regexpS'
          | 'regexpUnicodeProperties'
          | 'restSpreadProperties'
          | 'jsonSuperset'
          | 'optionalCatchBinding'
          | 'bigint'
          | 'dynamicImport'
          | 'optionalChaining'
          | 'nullishCoalescingOperators'
        )[];
      },
    ]
  >;
};
