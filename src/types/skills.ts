import { IconType } from 'react-icons';

/**
 * スキルを表現するための型定義
 * @property  title - スキルの名前（例：「JavaScript」「React」など）
 * @property  icon - スキルを表すアイコンコンポーネント
 * @property  level - スキルの習熟度を表す数値（例：1-5）
 * @property  description - スキルの詳細な説明文
 * @property  textColor - スキル表示時のテキストカラー（例：'text-blue-500'）
 */
export type Skill = {
  title: string;
  icon: IconType;
  level: number;
  description: string;
  textColor: string;
};
