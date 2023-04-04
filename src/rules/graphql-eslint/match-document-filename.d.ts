import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type MatchDocumentFilenameRule = {
  /**
   * This rule allows you to enforce that the file name should match the operation name.
   *
   * @see [match-document-filename](https://the-guild.dev/graphql/eslint/rules/match-document-filename)
   */
  '@graphql-eslint/match-document-filename': Rule<
    [
      RuleLevel,
      /**
       * @minItems 1
       * @maxItems 1
       */
      [
        {
          fileExtension?: '.gql' | '.graphql';
          query?: AsString | AsObject;
          mutation?: AsString | AsObject;
          subscription?: AsString | AsObject;
          fragment?: AsString | AsObject;
        },
      ],
      /**
       * One of: `camelCase`, `PascalCase`, `snake_case`, `UPPER_CASE`, `kebab-case`, `matchDocumentStyle`
       */
    ]
  >;
};
type AsString =
  | 'camelCase'
  | 'PascalCase'
  | 'snake_case'
  | 'UPPER_CASE'
  | 'kebab-case'
  | 'matchDocumentStyle';

interface AsObject {
  style?:
    | 'camelCase'
    | 'PascalCase'
    | 'snake_case'
    | 'UPPER_CASE'
    | 'kebab-case'
    | 'matchDocumentStyle';
  suffix?: string;
  prefix?: string;
}
