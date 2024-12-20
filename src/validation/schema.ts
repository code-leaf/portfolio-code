import { z } from 'zod';

/** 
 * フォームの入力値の検証用スキーマ
 */
export const contactFormSchema = z.object({
  name: z.string().min(1, { message: 'お名前は必須です。' }),
  email: z
    .string()
    .email({ message: '有効なメールアドレスを入力してください' }),
  message: z.string().min(1, { message: 'メッセージは必須です。' }),
});
