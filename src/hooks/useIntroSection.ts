import { LeafConfig } from '@/types/leaf';
import { generateLeaves } from '@/utils/generateLeaves';
import { useInView } from 'framer-motion';
import { MutableRefObject, useMemo, useRef } from 'react';

/**
 * `IntroSection`のカスタムフックの戻り値の型定義
 *
 * @property {MutableRefObject<null>} ref - 画面表示の監視対象となる要素の参照
 * @property {boolean} isInView - 要素が画面内に表示されているかのフラグ
 * @property {LeafConfig[]} leaves - 葉っぱのアニメーション設定の配列
 */
type UseIntroSection = {
  ref: MutableRefObject<null>;
  isInView: boolean;
  leaves: LeafConfig[];
};

/**
 * イントロセクションのアニメーション制御用カスタムフック
 *
 * 【実装ファイルリンク】
 * project://src\components\intro\IntroSection.tsx
 *
 * @returns {Object} アニメーション制御に必要な値とref
 *
 * @property {React.RefObject} ref - 監視対象要素のref
 * @property {boolean} isInView - 要素が画面内に表示されているか
 * @property {LeafConfig[]} leaves - 葉っぱのアニメーション設定配列
 */

export const useIntroSection = (): UseIntroSection => {
  /** 要素への参照を作成（画面内に入ったかどうかの判定に使用） */
  const ref = useRef(null);

  /** 要素が画面内に表示されているかを監視するフラグ
   *
   * @type {boolean} isInView - true: 要素が画面内に表示されている, false: 画面外
   *
   * @description
   * - useInViewフックで画面内表示を監視
   * - <motion.div ref={ref}>でラップされた要素を検知
   * - once: true の設定により、一度画面に表示されたら状態を維持
   * - アニメーションのトリガーとして使用
   */
  const isInView = useInView(ref, { once: true });

  /** 10枚の葉っぱの設定を生成し、メモ化（再レンダリング時に再生成されるのを防ぐ） */
  const leaves = useMemo(() => generateLeaves(), []);

  return { ref, isInView, leaves };
};
