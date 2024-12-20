'use client'; // ユーザー操作に適応するための定型文

import { AnimatedLeaf } from '@/components/leafComponents/AnimatedLeaf';
import { IntroSectionProps } from '@/constants/introSections';
import { useIntroSection } from '@/hooks/useIntroSection';
import { motion } from 'framer-motion';

/**
 * 自己紹介のセクションを表示するコンポーネント。
 * フェードインと葉っぱのアニメーションを含みます。
 *
 * @param {Object} props - コンポーネントのプロパティ
 * @param {string} props.emoji - セクションの絵文字アイコン
 * @param {string} props.title - セクションのタイトル
 * @param {string} props.bracket - タイトル訳（意訳）：タイトルの補足（括弧内の文字）
 * @param {string} props.description - 日本語小見出し:セクションの説明
 * @param {string} props.content - セクションの本文
 */
export const IntroSection = ({
  emoji,
  title,
  bracket,
  description,
  content,
}: IntroSectionProps) => {
  const { ref, isInView, leaves } = useIntroSection();
  return (
    <div className='w-full relative'>
      <motion.div
        // refを使用して要素への参照を保持
        ref={ref}
        // 初期状態の設定：透明度0（完全に透明）、下方向に20px移動した状態
        initial={{ opacity: 0, y: 20 }}
        // 要素が視界に入ったかどうかで異なるアニメーション状態を設定
        // isInView=true：透明度1（完全に表示）、元の位置（y=0）
        // isInView=false：透明度0（透明）、下に20px移動
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        // アニメーションの動作設定：遷移時間は0.6秒
        transition={{ duration: 0.6 }}
        // CSSクラスの適用：flexレイアウトを使用し、オーバーフロー時は隠す設定
        className='flex'
      >
        {/* 葉っぱのアニメーション用のコンテナー */}
        {isInView && (
          // 葉っぱのアニメーション全体を囲むコンテナー（画面いっぱいに配置され、はみ出し部分は隠す）
          <div className='absolute inset-0 w-full overflow-hidden'>
            {/* 葉っぱを10個生成して、それぞれに対して以下の処理を行う */}
            {leaves.map((leaf) => (
              // 各葉っぱを包む要素（相対配置で幅35%とすることで、葉っぱ同士が適度に重なり合う）
              <div className='relative' style={{ width: '45%' }} key={leaf.id}>
                {/* 個々の葉っぱのアニメーションを実行するコンポーネント */}
                <AnimatedLeaf leaf={leaf} />
              </div>
            ))}
          </div>
        )}

        {/* コンテンツ本体 */}
        <div className='flex-col items-center'>
          {/* 見出し部分 */}
          <div className='table'>
            {/* 絵文字とタイトル */}
            <span className='table-cell text-2xl lg:text-4xl font-bold w-44 lg:w-64'>
              {emoji} {title}
            </span>

            {/* タイトル訳（意訳）：カッコ内の文字 */}
            <span className='table-cell w-32 lg:w-44 font-bold text-lg lg:text-2xl'>
              {bracket}
            </span>

            {/* 日本語小見出し：パソコン画面 */}
            <span className='hidden sm:block font-bold text-xl'>
              - {description} -
            </span>
          </div>

          {/* 日本語小見出し：スマホ画面 */}
          <span className='block mt-1 sm:hidden font-bold text-xl text-center'>
            ― {description} ―
          </span>

          {/* 装飾的な横線 */}
          <div className='w-full h-[2px] bg-gradient-to-r from-green-400 to-green-700 mr-2 mt-1'></div>

          {/* 自己紹介の文章部分 */}
          <p className='max-w-5xl mt-5 pl-10 tracking-wider text-base lg:text-xl'>
            {content}
          </p>
        </div>
      </motion.div>
    </div>
  );
};
