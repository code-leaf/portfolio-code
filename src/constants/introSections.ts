export type IntroSectionProps = {
  emoji: string;
  title: string;
  bracket: string;
  description: string;
  content: string;
};

export const INTRODUCTION_SECTIONS: IntroSectionProps[] = [
  {
    emoji: '🌱',
    title: 'Root',
    bracket: '（原点）',
    description: '私のバックグラウンド',
    content:
      '福岡県在住の33歳、現在は職業訓練校で講師を務めております。学生時代に母が他界し、父が左半身麻痺を患ったため、高校卒業後は弟を支えるため、主に工場での仕事に従事してきました。決して平坦な道のりではありませんでしたが、この経験は私の人生における大切な糧となっております。',
  },
  {
    emoji: '🪴',
    title: 'Sprout',
    bracket: '（芽吹き）',
    description: '人生の転機',
    content:
      '弟の自立と父の他界を機に人生の転機を迎え、職業訓練校で簿記やOfficeスキルを学びました。その後、同じ訓練校で講師として教壇に立つことになり、自身の経験から「学び直し」の価値と可能性を強く信じるようになりました。',
  },
  {
    emoji: '🌿',
    title: 'Growth',
    bracket: '（成長）',
    description: 'プログラミングとの出会い',
    content:
      '講師として業務効率化を追求する中でVBAと出会い、プログラミングの魅力に取り憑かれました。2024年1月から本格的にWeb開発の学習をスタートし、ProgateやUdemy、YouTubeを通じて独学でスキルを磨いております。特に、Next.jsとTailwind CSS、TypeScriptを活用したモダンなフロントエンド開発に魅了され、使いやすいWebアプリケーションの作成に励んでおります。',
  },
  {
    emoji: '🍃',
    title: 'Branch Out',
    bracket: '（枝を広げて）',
    description: '知識の共有',
    content:
      '困難を乗り越えてきた経験と、教育者として培った「分かりやすく伝える力」を活かし、Qiitaにおいても同じユーザー名で情報発信をしております。「まだ小さな苗木だからこそ、大きく成長していける」という思いを込めたこの名前は、私の人生そのものを表現しているかもしれません。同じようにプログラミングを学ぶ方々、特に人生の転機で新しいことにチャレンジする方々の励みになれば幸いです。',
  },
  {
    emoji: '✨',
    title: 'Next Stage',
    bracket: '（未来へ）',
    description: '今後の展望',
    content:
      '人生の様々な局面を経験してきたからこそ持てる視点と、教育者としての経験を活かし、より多くの人の人生に寄り添えるようなサービスを生み出していきたいと考えております。「学びに遅すぎることはない」という信念のもと、これからも成長を続ける所存です🌱',
  },
] as const;
