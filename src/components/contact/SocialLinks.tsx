import { SocialIconLink } from '@/components/contact/SocialIconLink';
import { Github } from 'lucide-react';
import Image from 'next/image';

/** 
 * SNSアカウントへのリンクをアイコン付きで表示するコンポーネント
 */
export const SocialLinks = () => {
  return (
    /* SNSリンクを横並びに配置するコンテナ */
    <div className='flex space-x-6 justify-center'>
      {/* Ｘリンク */}
      <SocialIconLink
        href='https://x.com/CodeLeafProgram'
        label='X (旧Twitter)'
        className='text-gray-700 hover:text-gray-900 transition-colors'
      >
        <svg
          viewBox='0 0 24 24'
          className='w-8 h-8'
          fill='currentColor'
          aria-hidden='true'
        >
          <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
        </svg>
      </SocialIconLink>

      {/* Qiitaリンク */}
      <SocialIconLink
        href='https://qiita.com/CodeLeaf'
        label='Qiita'
        className='transition-all hover:brightness-125'
      >
        <Image
          alt='Qiita'
          src='/images/qiita-icon.png'
          width={32}
          height={32}
          className='w-10 h-10'
        />
      </SocialIconLink>

      {/* ポートフォリオ Githubリンク */}
      <SocialIconLink
        href='https://github.com/code-leaf/portfolio-code-leaf'
        label='Portfolio Repository'
        className='transition-opacity opacity-80'
      >
        <Image
          alt='Portfolio Repository'
          src='/images/favicon.ico'
          width={32}
          height={32}
          className='w-10 h-10'
        />
      </SocialIconLink>

      {/* Githubリンク */}
      <SocialIconLink
        href='https://github.com/code-leaf'
        label='GitHub'
        className='text-gray-600 hover:text-gray-900 transition-colors'
      >
        <Github className='w-8 h-8' />
      </SocialIconLink>
    </div>
  );
};
