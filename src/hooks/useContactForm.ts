import { useFormLeaveConfirmation } from '@/hooks/useFormLeaveConfirmation';
import { ContactFormData } from '@/types/form';
import { ModalType } from '@/types/modal';
import { contactFormSchema } from '@/validation/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';

/**
 * お問い合わせフォームの状態管理と送信処理を行うカスタムフックの戻り値の型定義
 */
type UseContactForm = {
  /** フォームの送信中状態（例：送信中はtrueとなり、送信ボタンを非活性にする） */
  isSubmitting: boolean;

  /** 送信後のモーダル表示種別（例：送信成功時は'success'、失敗時は'error'） */
  modalType: ModalType;

  /** モーダルを閉じる関数（例：モーダルの「閉じる」ボタンクリック時に実行） */
  closeModal: () => void;

  /**
   * - react-hook-formの初期化
   * - zodを使用したバリデーションを設定
   */
  form: UseFormReturn<ContactFormData, typeof contactFormSchema, undefined>;

  /**
   * フォームの送信処理を行う関数
   * - 成功時はフォームをリセットし、成功モーダルを表示
   * - 失敗時はエラーモーダルを表示
   */
  onSubmit: (data: ContactFormData) => Promise<
    | {
        success: boolean;
        error?: undefined;
      }
    | {
        success: boolean;
        error: unknown;
      }
  >;
};

/**
 * お問い合わせフォームの状態管理と送信処理を行うカスタムフック
 * フォームの入力状態、バリデーション、送信処理、モーダル表示を管理する
 */
export const useContactForm = (): UseContactForm => {
  // フォームの送信状態を管理
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // モーダル表示種別を管理
  const [modalType, setModalType] = useState<ModalType>(null);

  /**
   * react-hook-formの初期化
   * zodを使用したバリデーションを設定
   */
  const form = useForm<ContactFormData>({
    // 入力チェックの設定
    resolver: zodResolver(contactFormSchema),
  });

  // フォームを離れる時の確認ダイアログの表示条件を設定する
  useFormLeaveConfirmation(
    // 以下の3つの条件がすべて満たされた時にtrueとなる
    form.formState.isDirty && // フォームが一度でも変更されているかをチェック
      !isSubmitting && // フォームが送信中でないことをチェック
      Object.values(
        // フォームの全入力値を配列に変換
        form.getValues() // フォームの現在の入力値をすべて取得
      ).filter(Boolean).length > 0 // 空や未入力の値を除外してフィルタリング // 有効な入力値が1つ以上あるかをチェック
  );
  
  /** モーダルを閉じる処理 */
  const closeModal = () => setModalType(null);

  /**
   * フォームの送信処理
   * APIにデータを送信し、結果に応じてモーダルを表示する
   */
  const onSubmit = async (data: ContactFormData) => {
    // 送信開始状態をtrueに設定
    setIsSubmitting(true);
    try {
      // APIエンドポイントにPOSTリクエストを送信
      const response = await fetch('/api/contact', {
        // HTTPメソッドをPOSTに指定
        method: 'POST',
        // リクエストヘッダーでJSONを使用することを指定
        headers: { 'Content-Type': 'application/json' },
        // フォームデータをJSON文字列に変換してボディに設定
        body: JSON.stringify(data),
      });

      // レスポンスが正常でない場合はエラーを投げる
      if (!response.ok) throw new Error('送信に失敗しました');

      // フォームの入力内容をクリア
      form.reset();

      // 成功モーダルを表示するように状態を更新
      setModalType('success');

      // 成功結果を返す
      return { success: true };
    } catch (error) {
      // エラーモーダルを表示するように状態を更新
      setModalType('error');

      // エラー情報を含む失敗結果を返す
      return { success: false, error };
    } finally {
      // 送信完了状態をfalseに設定（成功/失敗に関わらず実行）
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, modalType, closeModal, form, onSubmit };
};
