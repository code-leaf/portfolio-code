/**
 * モーダルの種類を表す型定義
 * 成功時とエラー時でそれぞれ異なるスタイルのモーダルを表示する
 */
export type ModalType = 'success' | 'error' | null;

/**
 * モーダルコンポーネントのプロパティを定義する型
 * モーダルの表示制御と動作に必要な値を含む
 */
export type ModalProps = {
  /** モーダルの表示状態を制御（例：true の場合モーダルを表示、false の場合非表示） */
  isOpen: boolean;

  /** 表示するモーダルの種類を指定（例：'success' で緑色のチェックアイコン、'error' で赤色のバツアイコン） */
  modalType: ModalType;

  /** モーダルを閉じる際に実行するコールバック関数（例：「閉じる」ボタンクリック時やESCキー押下時に実行） */
  onClose: () => void;
};

/**
 * モーダルの表示内容を定義する型
 * タイトルは必須、メッセージは任意で設定可能
 */
export type ModalContent = {
  /** モーダルのヘッダー部分に表示するタイトル */
  title: string;

  /** モーダルの本文に表示するメッセージ */
  message: string;
};
