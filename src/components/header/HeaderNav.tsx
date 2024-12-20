/**
 * ナビゲーションアイテムの型定義
 * @property {string} label - ナビゲーションに表示するテキスト
 * @property {string} href - リンク先のURL（ハッシュリンク）
 */
type NavItem = {
  label: string;
  href: string;
};

/**
 * ナビゲーションの項目一覧
 * Headerのナビゲーションとして表示する項目
 */
const NAV_ITEMS: NavItem[] = [
  { label: '自己紹介', href: '#introduction' },
  { label: '制作サイト一覧', href: '#portfolio' },
  { label: 'スキル一覧', href: '#skills' },
  { label: 'お問い合わせ', href: '#contact' },
];

/**
 * HeaderNavコンポーネントのProps型定義
 * @property {string} className - ナビゲーションのスタイリングを制御するTailwind CSSクラス
 */
type HeaderNav = {
  className: string;
};

/**
 * ヘッダーナビゲーションコンポーネント
 * PC表示とモバイル表示で異なるスタイルを適用可能なナビゲーションを提供
 *
 * @component
 * @param {HeaderNav} props - コンポーネントのプロパティ
 * @param {string} props.components - ナビゲーションのコンテナに適用するTailwind CSSクラス
 *
 * @example
 * // PC表示用
 * <HeaderNav components="hidden lg:flex items-center space-x-6" />
 *
 * // モバイル表示用
 * <HeaderNav components="flex flex-col space-y-4" />
 */
export const HeaderNav = ({ className }: HeaderNav) => {
  return (
    // <ul className='hidden lg:flex items-center space-x-6'>
    <ul className={className}>
      {NAV_ITEMS.map((item) => (
        <li
          key={item.href}
          className='hover:cursor-pointer hover:text-[#15c155] hover:font-bold'
        >
          <a href={item.href}>{item.label}</a>
        </li>
      ))}
    </ul>
  );
};
