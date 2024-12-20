import { ModalContent, ModalType } from '@/types/modal';

/**
* モーダルの表示内容を定義する定数
* - 成功時とエラー時でそれぞれ異なるメッセージを表示する
*/
export const modalContents: Record<Exclude<ModalType, null>, ModalContent> = {
  /**
   * 送信成功時のモーダル内容
   */
  success: {
    title: '送信完了',
    message:
      'お問い合わせありがとうございます。\n内容を確認次第、ご連絡させていただきます。',
  },
  /**
   * 送信エラー時のモーダル内容
   */
  error: {
    title: '送信エラー',
    message:
      '申し訳ございません。送信に失敗しました。\nお時間を置いて、再度お試しください。',
  },
};
