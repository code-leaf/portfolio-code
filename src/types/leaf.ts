/** 個々の葉っぱのアニメーションと見た目を制御する為の設定
 *
 * 【実装ファイルリンク】
 * project://src\utils\generateLeaves.ts
 *
 * @property {string} id - 葉っぱを一意に制御するためのID
 * @property {number} x - 葉っぱの横方向の位置（0-100%）
 * @property {number} scale - 葉っぱの大きさの倍率（標準サイズ：1）
 * @property {number} rotateInitial - 葉っぱの回転角度（0-360度）
 * @property {number} swayAmount - 葉っぱが左右に揺れる幅（ピクセル）
 *
 * @example
 * //画面中央から開始し、0.5秒後に動き始め、標準サイズで、45度回転した状態から左右に20ピクセルずつ揺れる葉っぱ
 * const leafConfig = {
 *  id: 1,        // 一意のID
 *  x: 50,        // 横位置（画面中央）
 *  scale: 1,     // サイズ（標準）
 *  rotateInitial: 45,  // 開始時の角度
 *  swayAmount: 20      // 揺れ幅
 * }
 */
export type LeafConfig = {
  id: string;
  x: number;
  scale: number;
  rotateInitial: number;
  swayAmount: number;
};

/**
 * アニメーション付き葉っぱコンポーネントのプロパティ型定義
 *
 * 【実装ファイルリンク】
 * project://src\components\leafComponents\AnimatedLeaf.tsx
 *
 * @property {LeafConfig} leaf - 葉っぱのアニメーションを制御する設定オブジェクト
 *
 * @example
 * // アニメーション付き葉っぱコンポーネントの使用例
 * <AnimatedLeaf
 *   leaf={{
 *     id: 1,        // 一意のID
 *     x: 50,        // 横位置（画面中央）
 *     scale: 1,     // サイズ（標準）
 *     rotateInitial: 45,  // 開始時の角度
 *     swayAmount: 20      // 揺れ幅
 *   }}
 * />
 */
export type AnimatedLeafProps = {
  leaf: LeafConfig;
};
