import { Leaf } from '@/components/leafComponents/leaf';
import { AnimatedLeafProps } from '@/types/leaf';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

/**
 * 風に舞い上がり、重力に従って落下する葉っぱのアニメーションコンポーネント
 * 上昇→左右の揺れを伴う落下→消失のアニメーションを実現します
 *
 * @param {Object} props - コンポーネントのプロパティ
 * @param {LeafConfig} props.leaf - 葉っぱのアニメーション設定
 * @param {number} props.leaf.id - 葉っぱを一意に識別するためのID
 * @param {number} props.leaf.x - 横位置（画面幅に対する割合）
 * @param {number} props.leaf.scale - 葉っぱの大きさ（1が標準サイズ）
 * @param {number} props.leaf.rotateInitial - 開始時の回転角度（度数法）
 * @param {number} props.leaf.swayAmount - 左右の揺れ幅（画面幅に対する割合）
 *
 * @example
 * // 使用例
 * const leafConfig = {
 *   id: 1,
 *   x: 50,        // 画面の中央（50%）に配置
 *   scale: 1,     // 標準サイズ
 *   rotateInitial: 0,  // 回転なしで開始
 *   swayAmount: 20     // 左右に20%の範囲で揺れる
 * };
 * <AnimatedLeaf leaf={leafConfig} />
 */
export const AnimatedLeaf = ({ leaf }: AnimatedLeafProps) => {
  // コンポーネントの表示/非表示を管理するstate
  // true: 表示, false: 非表示
  const [isVisible, setIsVisible] = useState(true);

  // useEffectを使用して、コンポーネントの表示時間を管理
  useEffect(() => {
    // 2秒後にコンポーネントを非表示にするタイマーを設定
    const timer = setTimeout(() => {
      setIsVisible(false); // 表示状態をfalseに変更
    }, 4000); // 4000ミリ秒（4秒）後に実行

    // コンポーネントのアンマウント時にタイマーをクリーンアップ
    return () => clearTimeout(timer);
  }, []); // 空の依存配列で、マウント時にのみ実行

  // アニメーションの設定値を生成し、useMemoでメモ化（パフォーマンス最適化）
  const animationConfig = useMemo(
    () => ({
      // 上昇アニメーションの時間：2-3秒のランダムな値
      riseTime: 2 + Math.random(),
      // 落下アニメーションの時間：7-8秒のランダムな値
      fallTime: 7 + Math.random(),
      // 上昇する高さ：画面の40-50%の範囲でランダムな値
      floatHeight: 40 + Math.random() * 10,
      // 回転角度：20-40度の範囲でランダムな値
      rotateAmount: 20 + Math.random() * 20,
    }),
    [] // 空の依存配列で、初回レンダリング時にのみ計算
  );

  // アニメーションの各状態を定義するオブジェクト
  const leafVariants = {
    // アニメーション開始時の初期状態
    initial: {
      x: `${leaf.x}%`, // 指定された横位置
      y: '100%', // 画面下端（見えない位置）
      scale: leaf.scale * 0.8, // 指定サイズの80%
      rotate: leaf.rotateInitial, // 初期回転角度
      opacity: 1, // 完全に不透明
    },
    // 上昇時の状態
    rise: {
      x: `${leaf.x}%`, // 横位置は変更なし
      y: `${100 - animationConfig.floatHeight}%`, // 指定された高さまで上昇
      scale: leaf.scale, // 指定されたサイズに拡大
      rotate: leaf.rotateInitial + animationConfig.rotateAmount, // 回転
      transition: {
        duration: animationConfig.riseTime, // 上昇にかける時間
        ease: 'easeOut', // 終わりにかけて緩やかに
      },
    },
    // 落下時の状態
    fall: {
      // 横方向の動き：左右に揺れる動きを配列で定義
      x: [
        `${leaf.x}%`, // 開始位置
        `${leaf.x + leaf.swayAmount}%`, // 右に移動
        `${leaf.x - leaf.swayAmount}%`, // 左に移動
        `${leaf.x}%`, // 元の位置に戻る
      ],
      y: '100%', // 画面下端まで落下
      scale: leaf.scale * 0.8, // サイズを80%に縮小
      rotate: leaf.rotateInitial - animationConfig.rotateAmount, // 逆方向に回転
      opacity: 0, // 完全に透明に
      // トランジション（変化）の詳細設定
      transition: {
        duration: animationConfig.fallTime, // 落下にかける時間
        ease: 'easeIn', // 徐々に加速
        times: [0, 0.3, 0.7, 1], // アニメーションの進行状況に応じた時間配分
        // 横方向の揺れの詳細設定
        x: {
          duration: animationConfig.fallTime,
          ease: 'easeInOut', // なめらかな加速と減速
          repeat: 2, // 2回繰り返し
          repeatType: 'reverse', // 往復運動
        },
        // 回転の詳細設定
        rotate: {
          duration: animationConfig.fallTime / 2,
          ease: 'linear', // 一定速度
          repeat: 4, // 4回繰り返し
          repeatType: 'reverse', // 往復運動
        },
      },
    },
  };

  // コンポーネントが非表示の場合は何も描画しない
  if (!isVisible) return null;

  // 葉っぱのアニメーションを描画
  return (
    // Framer Motionのアニメーション付きdiv要素
    <motion.div
      key={leaf.id} // Reactの再レンダリング最適化用のキー
      variants={leafVariants} // 上で定義したアニメーション設定を適用
      initial='initial' // 初期状態の指定
      animate={['rise', 'fall']} // 実行するアニメーションの順序
      className='absolute w-full pointer-events-none' // スタイリング
      style={{
        transformOrigin: 'center center', // 変形の中心点を要素の中心に設定
      }}
    >
      {/* 葉っぱのSVGコンポーネントを描画 */}
      <Leaf />
    </motion.div>
  );
};
