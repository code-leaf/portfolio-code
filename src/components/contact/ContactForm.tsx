'use client'; // ユーザー操作に適応するための定型文

import { FormInput } from '@/components/contact/FormInput';
import { FormTextarea } from '@/components/contact/FormTextarea';
import Modal from '@/components/Modal';
import { useContactForm } from '@/hooks/useContactForm';
import { ContactFormData } from '@/types/form';
import { Loader2, Send } from 'lucide-react';

/**
 * お問い合わせフォームを表示・制御するコンポーネント
 */
export const ContactForm = () => {
  // フォームの状態管理とSubmit処理を行うカスタムフック
  const { isSubmitting, modalType, closeModal, onSubmit, form } =
    useContactForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  /**
   * フォームのSubmit時の処理
   * @param {ContactFormData} data - フォームの入力データ
   */
  const handleFormSubmit = async (data: ContactFormData) => {
    await onSubmit(data);
  };

  return (
    <div className='text-base lg:text-lg space-y-4'>
      {/* フォーム上部の説明文 */}
      <p>ポートフォリオをご覧いただきありがとうございます。</p>
      <p>私にご興味をお持ちの方は、ぜひこちらのフォームよりご連絡ください。</p>

      {/* お問い合わせフォーム */}
      <form
        className='flex flex-col space-y-4 pt-4'
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        {/* 名前入力フィールド */}
        <FormInput
          label='お名前'
          name='name'
          type='text'
          placeholder='山田　太郎'
          register={register}
          error={errors.name?.message?.toString()}
          disabled={isSubmitting}
        />

        {/* メールアドレス入力フィールド */}
        <FormInput
          label='メールアドレス'
          name='email'
          type='email'
          placeholder='your@email.com'
          register={register}
          error={errors.email?.message?.toString()}
          disabled={isSubmitting}
        />

        {/* メッセージ入力フィールド */}
        <FormTextarea
          label='メッセージ'
          name='message'
          placeholder='メッセージを入力してください'
          register={register}
          error={errors.message?.message?.toString()}
          disabled={isSubmitting}
        />

        {/* 送信ボタン*/}
        <button
          type='submit'
          disabled={isSubmitting}
          className='w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {isSubmitting ? (
            <span className='inline-flex items-center gap-2'>
              <span>送信中...</span>
              <Loader2 className='h-5 w-5 animate-spin' />
            </span>
          ) : (
            <span className='inline-flex items-center gap-2'>
              <span>送信</span>
              <Send className='h-5 w-5' />
            </span>
          )}
        </button>
      </form>

      {/* 送信結果を表示するモーダル */}
      <Modal
        isOpen={modalType !== null}
        modalType={modalType}
        onClose={closeModal}
      />
    </div>
  );
};
