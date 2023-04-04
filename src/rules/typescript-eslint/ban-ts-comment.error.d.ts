import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type BanTsCommentRule = {
  /**
   * Disallow `@ts-<directive>` comments or require descriptions after directives.
   *
   * @see [ban-ts-comment](https://typescript-eslint.io/rules/ban-ts-comment)
   */
  '@typescript-eslint/ban-ts-comment': Rule<
    [
      RuleLevel,
      {
        'ts-expect-error'?:
          | boolean
          | 'allow-with-description'
          | { descriptionFormat?: string };
        'ts-ignore'?:
          | boolean
          | 'allow-with-description'
          | { descriptionFormat?: string };
        'ts-nocheck'?:
          | boolean
          | 'allow-with-description'
          | { descriptionFormat?: string };
        'ts-check'?:
          | boolean
          | 'allow-with-description'
          | { descriptionFormat?: string };
        minimumDescriptionLength?: number;
      },
    ]
  >;
};
