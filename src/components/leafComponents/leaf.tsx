import { LucideLeaf } from 'lucide-react';

/**
 * 葉っぱの形状をlucide-reactのSproutアイコンで描画するコンポーネント
 * 緑色の半透明な葉っぱを表示
 *
 * @returns {JSX.Element} 葉っぱを表示するコンポーネント
 *
 * @example
 * // 葉っぱを表示
 * <Leaf />
 */
export const Leaf = () => {
  return (
    <div className='text-green-500'>
      <LucideLeaf
        // サイズは40×40に設定
        size={40}
        // strokeWidth（SVGの線の太さ）を細めに設定して繊細な見た目に
        strokeWidth={1.2}
        // 半透明の塗りつぶしを設定
        fill='currentColor'
        // SVGの塗りつぶしの透明度（0-1）
        fillOpacity={0.4}
        // アイコンのストロークも現在の文字色を使用
        color='currentColor'
        // 本来の使用目的がアイコンなのでaria-hiddenを設定（スクリーンリーダーに読み上げさせない）
        aria-hidden='true'
        // アニメーションのパフォーマンス最適化
        style={{
          willChange: 'transform',
        }}
      />
    </div>
  );
};
