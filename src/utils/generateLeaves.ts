import { LeafConfig } from '@/types/leaf';

/** 10枚のランダムな特性の葉っぱを生成する関数
 *
 * 【実装ファイルリンク】
 * project://src\hooks\useIntroSection.ts
 *
 * @returns {LeafConfig[]} 10枚の葉っぱの配列
 *
 * @example
 * //10枚の葉っぱの設定を生成
 * const leaves = generateLeaves();
 */
export const generateLeaves = (): LeafConfig[] => {
  // より一意性の高いIDを生成
  const uniqueId = () => Math.random().toString(36).substr(2, 9);
  return Array.from({ length: 10 }).map(() => ({
    id: uniqueId(),
    x: Math.random() * 100, //横位置を0-100%の間でランダムに設定
    scale: 0.5 + Math.random() * 0.5, //大きさを0.5-1倍の間でランダムに設定
    rotateInitial: Math.random() * 300, //回転角度を0-360度の間でランダムに設定
    swayAmount: 10 + Math.random() * 30, //揺れ幅を10-40pxの間でランダムに設定
  }));
};
