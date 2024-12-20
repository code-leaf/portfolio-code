import React from 'react';

/**
 * SNSリンクアイコンのプロパティを定義する型
 */
type SocialIconLinkProps = {
  /** リンク先のSNSページURL */
  href: string;

  /** アクセシビリティ用の説明文 */
  label: string;

  /** 追加のスタイリング用クラス名 */
  className?: string;

  /** アイコンとして表示するReactコンポーネント */
  children: React.ReactNode;
};

/**
 * SNSへのリンクをアイコン付きで表示するコンポーネント
 * @component
 * @param {object} props - コンポーネントのプロパティ
 * @param {string} props.href - リンク先のURL
 * @param {string} props.label - アイコンの説明文（アクセシビリティ用）
 * @param {string} [props.className] - 追加のCSSクラス名
 * @param {React.ReactNode} props.children - アイコンコンポーネント
 * @returns {JSX.Element} 丸型のアイコンリンク
 */
export const SocialIconLink = ({
  href,
  label,
  className,
  children,
}: SocialIconLinkProps) => {
  return (
    /* アイコンを囲む丸型のコンテナ（ホバー時に背景色が変化） */
    <div
      title={label}
      className={`w-14 h-14 flex justify-center items-center rounded-full p-2 hover:bg-white duration-200 ${className}`}
    >
      {/* 外部リンク（新しいタブで開く） */}
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={label}
      >
        {children}
      </a>
    </div>
  );
};
