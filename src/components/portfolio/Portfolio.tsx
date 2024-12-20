'use client'; // ユーザー操作に適応するための定型文
import { SectionLayout } from '@/components/SectionLayout';
import { projects } from '@/constants/projects';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

/**
 * プロジェクト作品一覧を表示するポートフォリオセクションコンポーネント
 */
export const Portfolio = () => {
  return (
    <SectionLayout
      title='制作サイト一覧'
      sectionId='portfolio'
      className='pt-10 bg-gray-100 dark:bg-[#0a0a0a]'
    >
      <section className='max-w-7xl mx-auto p-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {projects.map((project) => (
            //  各プロジェクトが独立した意味のある完結したコンテンツであることをSEOと読者に伝え為、articleタグを使用
            <article
              key={project.id}
              className='group relative bg-white rounded-xl transition-all duration-300 hover:scale-105'
            >
              {/* 動画アスペクト比で画像を表示するエリア*/}
              <div className='aspect-video relative'>
                {/* サイトの画像 */}

                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className='w-full h-full object-cover rounded-t-xl'
                />

                {/*  画像上にグラデーションオーバーレイを設置、可読性向上 */}
                {/* inset-0: 親要素いっぱいに広がる */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />

                {/* 画像上のテキストエリア */}
                <div className='absolute bottom-0 left-0 w-full px-6 pt-6 text-white'>
                  {/* プロジェクトのタイトル */}
                  <h3 className='text-xl sm:text-2xl font-bold mb-2 group-hover:translate-y-0 translate-y-2 transition-transform duration-300'>
                    {/* translate-y-2:通常時は下に2単位（0.5rem = 8px）移動 group-hover:translate-y-0 :グループ（親要素）にホバーした時、Y軸の移動を0に移動 */}
                    {project.title}
                  </h3>

                  {/* 技術スタックのコンテナ（ホバー時に表示） */}
                  <div className='flex flex-wrap gap-1 sm:gap-4 pb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className='px-3 py-1 text-xs sm:text-base bg-white/20 backdrop-blur-sm text-white rounded-full' //backdrop-blur-sm:半透明な要素の背後の内容がぼやけて見えます
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* カード下部のコンテンツエリア */}
              <div className='p-6'>
                {/* プロジェクトの説明文 */}
                <p className='text-gray-600 mb-6 text-lg'>
                  {project.description}
                </p>

                {/* ボタングループのコンテナ */}
                <div className='flex gap-4'>
                  {/* GitHubリンクボタン */}
                  <a
                    href={project.githubUrl}
                    target='_blank' // 新しいタブで開く
                    //noopener: 新しく開いたページから、元のページを操作できないようにする。（元のページを書き換えたり、フィッシング詐欺ページに置き換えたりするのを防ぐ
                    // noreferrer: 新しく開いたページに、どこからリンクされたかの情報を渡さないようにする。（プライバシー保護）
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors'
                  >
                    <Github size={20} />
                    <span className='text-sm sm:text-base'>コード</span>
                  </a>

                  <a
                    href={project.projectUrl}
                    target='_blank' // 新しいタブで開く
                    //noopener: 新しく開いたページから、元のページを操作できないようにする。（元のページを書き換えたり、フィッシング詐欺ページに置き換えたりするのを防ぐ
                    // noreferrer: 新しく開いたページに、どこからリンクされたかの情報を渡さないようにする。（プライバシー保護）
                    rel='noopener noreferrer' //
                    className='flex items-center gap-2 px-4 py-2 border border-gray-800 text-gray-800 rounded-lg hover:bg-gray-50 transition-colors'
                  >
                    <ExternalLink size={20} />
                    <span className='text-sm sm:text-base'>リンク</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SectionLayout>
  );
};
