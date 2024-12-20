import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

// エラーの複合型を定義
type ErrorType =
  | string
  | FieldError
  | Merge<FieldError, FieldErrorsImpl<Record<string, unknown>>>;

/**
 * エラーメッセージを文字列に変換するヘルパー関数
 * @param error - エラーオブジェクトまたは文字列
 * @returns エラーメッセージの文字列または undefined
 */
export const getErrorMessage = (
  error: ErrorType | undefined
): string | undefined => {
  if (!error) return undefined;

  if (typeof error === 'string') {
    return error;
  }

  // エラーオブジェクトのmessageプロパティを安全に文字列変換
  if ('message' in error) {
    return error.message?.toString();
  }

  return undefined;
};
