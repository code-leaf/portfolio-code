import { ContactForm } from '@/components/contact/ContactForm';
import { SocialLinks } from '@/components/contact/SocialLinks';
import { SectionLayout } from '@/components/SectionLayout';

/**
 * お問い合わせセクションを表示するコンポーネント
 * - お問い合わせフォームとSNSリンクを2カラムレイアウト
 */
export const Contact = () => {
  return (
    /* お問い合わせセクション全体のレイアウト */
    <SectionLayout
      title='お問い合わせ'
      sectionId='contact'
      className='pt-10 bg-gray-100 dark:bg-[#0a0a0a]'
    >
      {/* PCサイズでは2カラム、スマホサイズでは1カラムで表示 */}
      <div className='grid md:grid-cols-2 gap-8'>
        {/* 左カラム: お問い合わせフォーム */}
        <ContactForm />

        {/* 右カラム: SNSリンクと著作権表示 */}
        <div className='flex justify-center items-center flex-1'>
          <div className='flex-col'>
            {/* SNSリンクの説明文 */}
            <p className='text-base lg:text-lg text-center mb-6'>
              各プラットフォームもぜひご覧ください。
            </p>

            {/* SNSアイコンリンク一覧 */}
            <SocialLinks />

            {/* Freepik表記（画像の著作権表記） */}
            <p className='text-center text-base lg:text-lg tracking-widest mt-20'>
              Images by{' '}
              <a
                href='http://www.freepik.com'
                target='_blank'
                rel='noopener noreferrer'
                className='underline hover:text-[#15c155] transition-colors duration-300'
              >
                Freepik
              </a>
            </p>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};
