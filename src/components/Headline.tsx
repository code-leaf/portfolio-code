/**
 * 見出しのコンポーネントのプロパティ型定義
 * @property {string} title - 見出しとして表示するテキスト
 * @property {string} id - アクセシビリティ用のラベル（スクリーンリーダー用）
 */
type HeadlineProps = {
  title: string;
  id: string;
};

/**
 * 見出しコンポーネント
 * タイトルテキストの両側に装飾的な横線を配置した見出しを表示
 *
 * @component
 * @description
 * - タイトルテキストを中央に配置
 * - 両サイドに装飾的な横線を表示: 横線の長さは固定（w-28）
 * - ダークモード対応：
 *   - ライトモード：横線はグレー(bg-gray-600)
 *   - ダークモード：横線は白(bg-white)
 *
 * @param {Object} props
 * @param {string} props.title - 表示するタイトルテキスト
 *
 * @example
 * ```tsx
 * <Headline title="About Us" />
 * ```
 */
export const Headline = ({ title, id }: HeadlineProps) => {
  return (
    //   中央に並ぶように配置
    <div className='flex items-center'>
      {/* 左の装飾的な横線 */}
      <div className='w-14 sm:w-28 h-[2px] bg-gray-600 dark:bg-white mr-2'></div>

      {/* 表示するテキスト部分 */}
      <h2 id={id} className='text-2xl sm:text-3xl font-bold tracking-wide'>
        {title}
      </h2>

      {/* 右の装飾的な横線 */}
      <div className='w-14 sm:w-28 h-[2px] bg-gray-600 dark:bg-white ml-2'></div>
    </div>
  );
};
