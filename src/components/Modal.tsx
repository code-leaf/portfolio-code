import { modalContents } from '@/constants/modalContents';
import { ModalProps, ModalType } from '@/types/modal';
import { CheckCircle2, XCircle } from 'lucide-react';
import { useEffect } from 'react';

/**
 * 成功/エラーメッセージを表示するモーダルダイアログコンポーネント
 * @component
 * @param {ModalProps} props - モーダルの制御に必要なプロパティ
 * @param {boolean} props.isOpen - モーダルの表示状態
 * @param {() => void} props.onClose - モーダルを閉じる関数
 * @param {ModalType} props.modalType - モーダルの種類（success/error）
 * @returns {JSX.Element | null} モーダルダイアログを表示するコンポーネント
 */
const Modal = ({ isOpen, onClose, modalType }: ModalProps) => {
  // ESCキーでモーダルを閉じる機能の追加
  useEffect(() => {
    // ESCキーが押されたときの処理を定義
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    // キーボードイベントの監視
    window.addEventListener('keydown', handleEsc);

    // コンポーネントのクリーンアップ時にイベント監視を解除
    return () => window.removeEventListener('keydown', handleEsc);

    // onClose関数が変更されたときに再実行
  }, [onClose]);

  // モーダル表示時に背景のスクロールを無効化
  useEffect(() => {
    // isOpenの値に応じて適切なスタイルを設定
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';

    // クリーンアップ関数
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // モーダルが開いていない場合は何も表示しない
  if (!isOpen) return null;

  // modalTypeに基づいて適切なモーダル内容を取得
  const modalContent = modalContents[modalType as Exclude<ModalType, null>];

  return (
    // モーダルの背景：画面全体を覆う半透明のオーバーレイ
    <div className='fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-50'>
      {/* モーダルの内容：白背景の角丸コンテナ */}
      <div
        role='dialog' //ダイアログ
        aria-labelledby='modal-title' //タイトル用アクセシビリティ
        aria-describedby='modal-description' //説明文用アクセシビリティ
        className='bg-white rounded-lg p-6 max-w-[95%] sm:max-w-md w-full space-y-4'
      >
        {/* アイコンとタイトルを横並びで表示 */}
        <div className='flex space-x-4 items-center'>
          {/* 成功/エラーに応じたアイコンを表示 */}
          {modalType === 'success' ? (
            <div>
              <CheckCircle2 className='h-8 w-8 text-green-500' />
            </div>
          ) : (
            <div>
              <XCircle className='h-8 w-8 text-red-500' />
            </div>
          )}

          {/* タイトル*/}
          <h2 id='modal-title' className='text-xl text-gray-600 font-bold'>
            {modalContent.title}
          </h2>
        </div>

        {/* 本文 */}
        <p
          id='modal-description'
          className='text-gray-600 text-sm sm:text-base whitespace-pre-wrap'
        >
          {modalContent.message}
        </p>

        {/* 閉じるボタンを右寄せで配置 */}
        <div className='flex justify-end'>
          <button
            className={`px-4 py-2 rounded-md text-white ${
              modalType === 'success'
                ? 'bg-green-500 hover:bg-green-600'
                : 'bg-gray-500 hover:bg-gray-600'
            }`}
            onClick={onClose} // クリック時にモーダルを閉じる
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
};

// Modalコンポーネントをエクスポート
export default Modal;
