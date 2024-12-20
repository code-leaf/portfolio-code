import { FormProps } from '@/types/form';
import { getErrorMessage } from '@/utils/getErrorMessage';

/**
 * 複数行のテキスト入力フィールドを表示するフォームコンポーネント
 * @component
 * @param {FormProps} props - フォームフィールドの設定に必要なプロパティ
 * @param {string} props.label - 入力フィールドのラベル
 * @param {string} props.name - フォームフィールドの名前
 * @param {string} props.placeholder - プレースホルダーテキスト
 * @param {Function} props.register - react-hook-formのregister関数
 * @param {Object} props.error - バリデーションエラー情報
 * @param {boolean} props.disabled - 入力の無効化状態
 * @returns {JSX.Element} テキストエリアコンポーネント
 */
export const FormTextarea = ({
  label,
  name,
  placeholder,
  register,
  error,
  disabled,
}: FormProps) => {
  return (
    // 入力フィールド全体のコンテナ
    <div>
      {/* ラベル部分 */}
      <label className='block text-sm font-medium mb-1'>{label}</label>

      {/* 入力欄 */}
      <textarea
        {...register(name)}
        className={`w-full px-4 py-2 rounded-lg border text-gray-600 ${
          error ? 'border-red-500' : 'border-gray-300'
        } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
        placeholder={placeholder}
        disabled={disabled}
        rows={8}
      />

      {/* エラーメッセージの表示（エラーがある場合のみ） */}
      {error && (
        <p className='text-sm text-red-500 mt-1'>{getErrorMessage(error)} </p>
      )}
    </div>
  );
};
