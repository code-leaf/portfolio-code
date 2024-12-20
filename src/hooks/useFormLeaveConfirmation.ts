import { useEffect } from 'react';

/**
 * - フォームの入力内容が失われる操作に対して確認ダイアログを表示するカスタムフック
 * - ページ移動、タブ終了、ブラウザバック時などに確認ダイアログを表示する
 */
export const useFormLeaveConfirmation = (
  /** 確認ダイアログを表示するかどうかのフラグ（例：フォームが変更された場合はtrue、保存後はfalse） */
  shouldConfirm: boolean,
  /** 確認ダイアログに表示するメッセージ（例：「入力内容が失われますが、よろしいですか？」） */
  message: string = '入力内容が失われますが、よろしいですか？'
) => {
  useEffect(() => {
    if (!shouldConfirm) return;

    /**
     * タブを閉じる/リロード/ナビゲーション時の確認ダイアログを表示
     * ブラウザ標準の確認ダイアログが表示される
     */
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = message;
      return message;
    };

    /**
     * 戻る/進むボタン押下時の確認ダイアログを表示
     * キャンセル時は現在のページに留まる
     */
    const handlePopState = () => {
      if (window.confirm(message)) return;
      // キャンセルした場合は現在のURLに留まる
      window.history.pushState(null, '', window.location.href);
    };

    // 現在のURLをhistoryに追加（戻るボタン検知用）
    window.history.pushState(null, '', window.location.href);

    // イベントリスナーの登録
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handlePopState);

    /**
     * クリーンアップ関数
     * コンポーネントのアンマウント時にイベントリスナーを解除
     */
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [shouldConfirm, message]);
};
