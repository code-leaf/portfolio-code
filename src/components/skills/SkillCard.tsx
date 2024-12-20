import { Skill } from '@/types/skills'; // スキル型定義をインポート
import { Star } from 'lucide-react'; // 星アイコンコンポーネントをインポート

/**
 * スキルを視覚的に表示するためのカードコンポーネント
 * @component
 * @param props - スキル情報を含むプロパティ
 * @returns {JSX.Element} スキルを表示するカードコンポーネント
 */
export const SkillCard = ({
  title,
  icon: Icon,
  level,
  description,
  textColor,
}: Skill) => {
  return (
    //カード全体のコンテナ要素
    <div className='p-6 rounded-lg text-gray-800 bg-white/90 border border-gray-400 shadow-md'>
      {/* アイコンとタイトルを横並びにするコンテナ */}
      <div className='flex items-center mb-4'>
        {/* アイコン部分 */}
        <div className='w-12 h-12 flex items-center justify-center rounded-full mr-4'>
          <Icon className={`w-12 h-12 ${textColor}`} />
        </div>
        {/* タイトルと評価の星 */}
        <div>
          <h3 className='text-xl font-semibold'>{title}</h3>
          <div className='flex items-center'>
            {/* 5つの星を生成するループ */}
            {Array.from({ length: 5 }).map((_, i) => (
              // 星アイコンコンポーネント
              <Star
                key={i} // Reactのキーを設定
                size={16}
                className={`${
                  // 星の色を条件分岐で設定
                  i < level // 現在の星がレベル未満なら
                    ? 'text-yellow-400 fill-yellow-400' // 黄色で塗りつぶし
                    : 'text-gray-400' // そうでなければグレー
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* スキルの説明文を表示 */}
      <p className='text-lg'>{description}</p>
    </div>
  );
};
