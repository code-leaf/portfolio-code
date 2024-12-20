import { HeaderNav } from '@/components/header/HeaderNav';
import { ImageComponent } from '@/components/ImageComponent';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover';
import { Menu } from 'lucide-react';

/**
 * ヘッダーコンポーネント
 * サイトの最上部に固定表示され、ロゴとナビゲーションメニューを含む
 *
 * @component
 * @description
 * - 画面上部に固定表示
 * - 背景は黒で半透明なブラー効果あり(backdrop-blur-sm)
 * - 背景を軽くぼかすことで、スクロールしてもヘッダーが背景と溶け込む
 * - レスポンシブ対応：
 *   - PC表示：通常のナビゲーションメニュー
 *   - モバイル表示：ハンバーガーメニューとPopoverによるドロップダウン
 */
export const Header = () => {
  return (
    <div className='fixed top-0 z-50 bg-[#0a0a0a] text-white backdrop-blur-sm w-full'>
      <div className='flex justify-between items-center container mx-auto pt-4'>
        {/* 左側：ロゴ部分 */}
        <a
          href='#introduction'
          className='group flex justify-center items-center ml-8'
        >
          <ImageComponent
            srcSet='/images/logo.webp'
            src='/images/logo.png'
            alt='サイトのロゴ'
            width={130}
            height={65}
            className='filter brightness-150 group-hover:brightness-200 backdrop-brightness-50 transition-all duration-300'
          />
          <span className='tracking-wider text-xl font-semibold mt-1 group-hover:text-green-200'>
            Portfolio
          </span>
        </a>

        {/* 右側：ナビゲーションエリア： */}
        <div>
          <nav className='mr-10' aria-label='メインナビゲーション'>
            {/* モバイル表示：ハンバーガーメニュー */}
            <div className=' lg:hidden group'>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    className='rounded-full p-2 group-hover:bg-green-200'
                    aria-label='メニューを開く'
                  >
                    <Menu color='white' size={35} className='block' />
                  </button>
                </PopoverTrigger>

                {/* Popoverで表示される中身のコンテンツ */}
                <PopoverContent
                  className='w-48 p-4 text-gray-700 bg-white rounded-md shadow-xl z-10 mr-4'
                  align='start' //左寄せで表示
                  sideOffset={6}
                  aria-label='ナビゲーションメニュー'
                >
                  <HeaderNav className='flex flex-col space-y-4' />
                </PopoverContent>
              </Popover>
            </div>

            {/* PC表示：通常のナビゲーション */}
            <HeaderNav className='hidden lg:flex items-center space-x-6' />
          </nav>
        </div>
      </div>
    </div>
  );
};
