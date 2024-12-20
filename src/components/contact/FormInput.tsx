import { FormProps } from '@/types/form';
import { getErrorMessage } from '@/utils/getErrorMessage';

/**
 * 統一されたデザインと機能を持つ入力フォームコンポーネント
 * ラベル、入力欄、エラー表示を一括で管理し、react-hook-formと連携する
 *
 * @example
 * <FormInput
 *   label="お名前"
 *   name="name"
 *   type="text"
 *   placeholder="山田太郎"
 *   register={register}
 *   error={errors.name?.message}
 *   disabled={isSubmitting}
 * />
 */
export const FormInput = ({
  label,
  name,
  type,
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
      <input
        {...register(name)}
        type={type}
        className={`w-full px-4 py-2 rounded-lg border text-gray-600 ${
          error ? 'border-red-500' : 'border-gray-300'
        } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete={name}
      />

      {/* エラーメッセージの表示（エラーがある場合のみ） */}
      {error && (
        <p className='text-sm text-red-500 mt-1'>{getErrorMessage(error)} </p>
      )}
    </div>
  );
};
