import { Project } from '@/types/portfolio';

export const projects: Project[] = [
  {
    id: 1,
    title: '勘定科目クイズアプリ',
    description: `簿記の勘定科目のクイズができるアプリケーション。
    時間を気にせず学習できる「無制限モード」(デフォルト)と、指定回数(5問単位)を設定し、正解率に応じたスコアが表示される「回数指定モード」があります。`,
    technologies: [
      'React 18',
      'Next.js 14',
      'TypeScript',
      'Lucide React',
      'react-circular-progressbar',
      'Recoil',
      'TailwindCSS',
    ],
    imageUrl: '/urlImages/boki-app.png',
    githubUrl: 'https://github.com/code-leaf/boki-app',
    projectUrl: 'https://boki-app-rust.vercel.app/',
  },

  {
    id: 2,
    title: 'CS検定時間計測アプリ',
    description: `Word・ExcelのCS検定の時間計測ができるアプリケーション。
    残り時間と経過時間が表示され、四国めたん（VOICEVOX）の音声ガイダンスで、経過時間の通知や課題切り替えのタイミングをアナウンスします。`,
    technologies: [
      'React 19',
      'Next.js 15',
      'TypeScript',
      'Axios',
      'Lucide React',
      'TailwindCSS',
    ],
    imageUrl: '/urlImages/cs-timer.png',
    githubUrl: 'https://github.com/code-leaf/cs-timer',
    projectUrl: 'https://cs-timer-eight.vercel.app/',
  },
  {
    id: 3,
    title: 'メール作成練習アプリ',
    description: `ビジネスメールの授業における送受信トラブルを解消する為に開発したアプリケーション。
    実際には送信されない為、送信までのメール作成の基本操作を安全に練習できます。現在も、授業で活用しています 。`,
    technologies: [
      'React 18',
      'Next.js 14',
      'TypeScript',
      'Recoil',
      'Font Awesome',
      'react-hook-form',
      'TailwindCSS',
    ],
    imageUrl: '/urlImages/mail-practice.png',
    githubUrl: 'https://github.com/code-leaf/mail-practice',
    projectUrl: 'https://mail-practice.vercel.app/',
  },
  {
    id: 4,
    title: 'フォーム作成練習アプリ',
    description: `Googleフォームの操作練習ができるアプリケーション。
    授業において、Gアカウント作成制限により、Googleフォームが使用できない課題を解決するために開発。質問作成の基本操作を効率的に学習できます。`,
    technologies: [
      'React 18',
      'Next.js 14',
      'TypeScript',
      'Chart.js',
      'Font Awesome',
      'Recoil',
    ],
    imageUrl: '/urlImages/google-forms-practice.png',
    githubUrl: 'https://github.com/code-leaf/google-forms-practice',
    projectUrl: 'https://google-forms-practice.vercel.app/',
  },

  {
    id: 5,
    title: '音楽プレイヤー',
    description: `Udemy講座の教材として作成した音楽プレイヤーアプリケーション。
    講座で解説される手順に沿って、Spotify APIの活用方法を学習。基本的な楽曲検索と再生機能の実装プロセスを体験しました。`,
    technologies: [
      'React 18',
      'Font Awesome',
      'Axios',
      'Spotify API',
      'react-scripts',
    ],
    imageUrl: '/urlImages/music-app.png',
    githubUrl: 'https://github.com/code-leaf/music-app',
    projectUrl: 'https://music-app-ruddy-nine.vercel.app/',
  },
  {
    id: 6,
    title: 'NARUTO図鑑',
    description: `Udemy講座の教材として作成したキャラクター情報データベースアプリケーション。
    基本的なデータベース操作とキャラクター詳細情報の表示機能を実装。Web開発の基礎知識習得を学習できました。`,
    technologies: ['React 18', 'Axios', 'Jest', 'REST API', 'react-scripts'],
    imageUrl: '/urlImages/naruto-app.png',
    githubUrl: 'https://github.com/code-leaf/naruto-app',
    projectUrl: 'https://naruto-app-theta.vercel.app/',
  },
] as const;
