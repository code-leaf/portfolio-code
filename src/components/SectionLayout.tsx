import { Headline } from '@/components/Headline';
import { ReactNode } from 'react';

/**
 * セクションレイアウトコンポーネントのプロパティ型定義
 * @typedef {Object} SectionLayoutProps
 * @property {string} title - セクションのタイトル
 * @property {ReactNode} children - セクション内に表示する子要素
 * @property {string} sectionId - セクションのID（ページ内リンク用）
 * @property {string} [className] - オプションのスタイリングクラス
 */
type SectionLayoutProps = {
  title: string;
  children: ReactNode;
  sectionId: string;
  className?: string;
};

/**
 * 共通のセクションレイアウトを提供するコンポーネント
 * タイトルヘッダーと中央寄せのコンテンツエリアを持つ
 * レスポンシブデザインに対応し、適切な余白とスペーシングを提供する
 *
 * @param {SectionLayoutProps} props - コンポーネントのプロパティ
 * @param {string} props.title - セクションのタイトル
 * @param {ReactNode} props.children - セクション内に表示される子要素
 * @param {string} props.sectionId - セクションのID（ページ内リンク用）
 * @param {string} [className] - オプションのスタイリングクラス
 * 
 * @returns {JSX.Element} セクションレイアウトを含むJSXエレメント
 * 
 * @example
 * // カスタムスタイルを適用した例
 * <SectionLayout
 *   title="スキル一覧"
 *   sectionId="skills"
 *   className="bg-gray-100 min-h-screen"
 * >
 *   <div>スキルカード</div>
 * </SectionLayout> 
 * 
 * // レンダリング結果:
 * // <div class="bg-gray-100 min-h-screen"> <- classNameがここに追加されます
 * //   <section class="flex flex-col items-center p-8 space-y-8 container mx-auto">
 * //     <h2>スキル一覧</h2>
 * //     <div>スキルカード</div>
 * //   </section>
 * // </div>
 */
export const SectionLayout = ({
  title,
  children,
  sectionId,
  className,
}: SectionLayoutProps) => {
  return (
    <div className={`pb-4 sm:pb-24 ${className}`}>
      <section
        id={sectionId}
        aria-labelledby={`headline-${sectionId}`} //セクションと見出しを関連付ける
        className='flex flex-col items-center p-8 space-y-8 container mx-auto'
      >
        {/* 見出し部分 */}
        <Headline title={title} id={`headline-${sectionId}`} />
        {children}
      </section>
    </div>
  );
};
