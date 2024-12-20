import { Skill } from '@/types/skills';
import {
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

// スキル情報の配列を定義
export const skills: Skill[] = [
  {
    title: 'Next.js',
    icon: SiNextdotjs,
    level: 4,
    description:
      'App Routerを用いたWebアプリケーションの画面遷移やフォーム処理、クライアントコンポーネントとサーバーコンポーネントの使い分けなど、基本機能を実装できます。',
    textColor: 'text-black',
  },
  {
    title: 'TypeScript',
    icon: SiTypescript,
    level: 4,
    description:
      'コンポーネントのProps型や配列・オブジェクト、オプショナルな値の型定義など、開発に必要な基本的な型定義を行うことができます。型定義には、typeを使用しております。',
    textColor: 'text-blue-600',
  },
  {
    title: 'TailwindCSS',
    icon: SiTailwindcss,
    level: 4,
    description:
      'レスポンシブデザインの実装、flexboxやgridを活用したレイアウト調整、hoverなどの擬似クラスを使用したインタラクションの実装ができます。コンポーネント間でのスタイルの再利用も意識して実装しております。',
    textColor: 'text-cyan-500',
  },
  {
    title: 'React',
    icon: SiReact,
    level: 4,
    description:
      '基本的なHooksの活用とRecoilによる状態管理、カスタムフックの作成による共通ロジックの抽出など、基本的な機能実装ができます。また、コンポーネントの分割と再利用を意識した実装を心掛けております。',
    textColor: 'text-sky-500',
  },
  {
    title: 'Python',
    icon: SiPython,
    level: 2,
    description:
      'プログラミング学習プラットフォームで基礎を学習し、変数、条件分岐、ループなどの基本的な文法を理解しています。リストや辞書を使用した簡単なプログラムを作成できます。',
    textColor: 'text-python',
  },
  {
    title: 'SQL',
    icon: SiPostgresql,
    level: 2,
    description:
      'プログラミング学習プラットフォームで基礎を学習し、データベースの基本概念を理解しています。SELECT、INSERT、UPDATEなどの基本的なクエリを書くことができます。',
    textColor: 'text-sql',
  },
] as const;
