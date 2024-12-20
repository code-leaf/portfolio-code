import { contactFormSchema } from '@/validation/schema';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/** メール送信用のトランスポーター設定 */
const transporter = nodemailer.createTransport({
  /** Gmail使用を指定 */
  service: 'gmail',
  /** メール送信用の認証情報 */
  auth: {
    /** 送信元のGmailアドレス（環境変数から取得） */
    user: process.env.EMAIL_USER,
    /** Gmailのアプリパスワード（環境変数から取得） */
    pass: process.env.EMAIL_PASS,
  },
});

/**
 * POSTリクエストを処理するAPI関数
 * - フォームデータを受け取り、メールを送信する
 */
export async function POST(request: Request) {
  try {
    /** リクエストボディからJSONデータを取得 */
    const body = await request.json();

    /** zodスキーマを使用してデータを検証 */
    const validatedData = contactFormSchema.parse(body);

    // 検証済みデータから必要な情報を取り出す
    const { name, email, message } = validatedData;

    // メールを送信
    await transporter.sendMail({
      // 送信元メールアドレス（環境変数から取得）
      from: process.env.EMAIL_USER,
      // 受信者メールアドレス（環境変数から取得）
      to: process.env.RECEIVE_EMAIL,
      // メールの件名（送信者の名前を含める）
      subject: `ポートフォリオサイトからのお問い合わせ: ${name}様より`,
      // メール本文（HTMLフォーマット）
      html: `
        <h3>ポートフォリオサイトからのお問い合わせ</h3>
        <p><strong>名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>メッセージ:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // 成功レスポンスを返す
    return NextResponse.json(
      { message: '送信が完了しました。' },
      { status: 200 }
    );
  } catch (error) {
    console.error('エラーが発生しました:', error);

    // エラーレスポンスを返す
    return NextResponse.json(
      { error: 'メールの送信に失敗しました。' },
      { status: 500 }
    );
  }
}
