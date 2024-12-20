import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegister,
} from 'react-hook-form';

/**
 * フォームの型定義
 */
export type ContactFormData = {
  /** 名前入力箇所 */
  name: string;
  /** メールアドレス入力箇所 */
  email: string;
  /** メッセージ入力箇所 */
  message: string;
};

/**
 * フォームの入力欄を再利用可能なコンポーネントとして実装するための型定義
 * フォーム全体の一貫性を保ち、エラー表示などの共通機能を提供する
 */
export type FormProps = Readonly<{
  /** 入力欄の上部に表示するラベル文字列（例：「お名前」「メールアドレス」） */
  label: string;
  /** フォーム内でのフィールドの識別子。ContactFormDataの各フィールドに対応（例：'name'、'email'） */
  name: keyof ContactFormData;
  /** 入力欄のHTML input要素のtype属性値（例：'text'、'email'、'tel'） */
  type?: string;
  /** 入力欄が空の時に表示される補助テキスト（例：「山田太郎」「your@email.com」） */
  placeholder: string;
  /** react-hook-formのregister関数。入力値の登録と検証を行う */
  register: UseFormRegister<ContactFormData>;
  /** バリデーションエラー時のメッセージ（例：「この項目は必須です」） */
  error?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<Record<string, unknown>>>;
  /** フォーム送信中など、入力を無効化する必要がある場合にtrueを設定 */
  disabled?: boolean;
}>;
