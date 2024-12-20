import Image from 'next/image';


/**
 * 画像表示のための型定義
 * @property {string} srcSet - WebP形式の画像パス（複数解像度対応）
 * @property {string} src - WebPをサポートしていないブラウザ用のフォールバック（代替）画像）
 * @property {string} alt - 画像の代替テキスト
 * @property {number} width - 画像の幅（ピクセル）
 * @property {number} height - 画像の高さ（ピクセル）
 * @property {string} [className] - オプションのスタイリングクラス
 */
type ImageComponentProps = {
  srcSet: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

/**
 * 画像表示のためのコンポーネント
 * 
 * @description
 * このコンポーネントは以下の機能を提供します：
 * - WebP形式の画像を優先的に表示（ブラウザが対応している場合）
 * - デバイスの画面サイズや解像度に応じて最適な画像を提供(未実装)
 * ※ 余裕があれば、作成
 * - フォールバックとして従来の画像形式をサポート
 * 
 * @example
 * ```tsx
 * <ImageComponent
 *   // WebP形式の画像パスを指定します
 *   // 複数の解像度を指定する場合は下記のように指定します
 * 　// "/images/logo-320w.webp 320w, /images/logo-768w.webp 768w"
 *   srcSet="/images/logo.webp"
 *   src="/images/logo.png"
 *   alt="Company Logo"
 *   width={200}
 *   height={100}
 *   className="rounded-lg"
 * />
 * ```
 * 
 * @returns {JSX.Element} 画像を表示するpicture要素
 */
export const ImageComponent = ({
  srcSet,
  src,
  alt,
  width,
  height,
  className,
}: ImageComponentProps) => {
  return (
    // picture要素: 複数の画像フォーマットを提供するためのHTML5の要素
    <picture className='inline-block'>
      {/* source要素: 代替となる画像ソースを指定  */}
      {/* WebP形式の画像を優先的に使用（モダンブラウザ向け） */}
      <source
        type='image/webp' // WebP形式であることを指定
        srcSet={srcSet} // WebP画像のパスを指定
      />

      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority // このロゴを優先的に読み込む設定
        className={className}
      />
    </picture>
  );
};
