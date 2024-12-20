import { SectionLayout } from '@/components/SectionLayout';
import { SkillCard } from '@/components/skills/SkillCard';
import { skills } from '@/constants/skills';

/**
* スキル一覧を表示するセクションコンポーネント
* @returns {JSX.Element} スキル一覧セクション
*/
export const Skills = () => {

  return (
    // セクションレイアウトコンポーネント
    <SectionLayout
      title='スキル一覧'
      sectionId='skills'
      className='pt-10 dark:bg-[#0a0a0a]'
    >
      {/* セクション説明文 */}
      <p className=' mb-12 max-w-4xl mx-auto text-xl'>
        使用・学習している技術スタックです。
        Next.js、TypeScript、TailwindCSSを中心に、
        実践的なWeb開発スキルの習得に取り組んでおります。
      </p>

      {/* スキルカードのグリッドレイアウト */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {skills.map((skill) => (
          <SkillCard key={skill.title} {...skill} />
        ))}
      </div>
    </SectionLayout>
  );
};
