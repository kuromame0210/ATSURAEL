import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { COMPANY_INFO } from '@/lib/data'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // 基本バリデーション
    if (!data.customerName || !data.customerEmail || !data.detailedRequirements) {
      return NextResponse.json(
        { error: '必須フィールドが不足しています' },
        { status: 400 }
      )
    }

    // メールトランスポーターの設定（実際の運用時は環境変数を使用）
    const transporter = nodemailer.createTransport({
      // 本番環境では適切なメールサービスを設定
      host: process.env.SMTP_HOST || 'localhost',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // 管理者向けメール内容
    const adminEmailContent = `
【ATSURAELフルオーダー相談】
受信日時: ${new Date().toLocaleString('ja-JP')}

■お客様情報
お名前: ${data.customerName}
メール: ${data.customerEmail}
電話番号: ${data.customerPhone || '未入力'}

■ご希望内容
指輪の種類: ${data.ringType}
デザインイメージ: ${data.designImage}
ご希望の素材: ${data.preferredMaterial}
ご希望の宝石: ${data.preferredGemstone || '未入力'}

■ご予算・スケジュール
ご予算: ${data.budget}
完成希望時期: ${data.completionDate}

■詳細なご要望
${data.detailedRequirements}

■ご質問
${data.questions || '未入力'}

--
このメールは ATSURAELサイト から自動送信されました。
    `.trim()

    // お客様向け自動返信メール内容
    const customerEmailContent = `
${data.customerName} 様

この度は、ATSURAELフルオーダーにご興味をお持ちいただき、誠にありがとうございます。

ご相談内容を確認いたしました。
専門スタッフが内容を検討し、2-3営業日以内にご返信いたします。

■ご相談内容（確認用）
・指輪の種類: ${data.ringType}
・デザインイメージ: ${data.designImage}
・ご希望の素材: ${data.preferredMaterial}
・ご予算: ${data.budget}
・完成希望時期: ${data.completionDate}

ご不明な点やお急ぎの場合は、下記までお気軽にご連絡ください。

【お問い合わせ先】
${COMPANY_INFO.name}
TEL: ${COMPANY_INFO.phone}
Email: ${COMPANY_INFO.email}
営業時間: ${COMPANY_INFO.businessHours}

相談は無料です。押し売りは一切いたしません。
お客様の想いを形にするお手伝いができるよう、丁寧にサポートいたします。

--
${COMPANY_INFO.brandName}
${COMPANY_INFO.name}
${COMPANY_INFO.address}
    `.trim()

    // 管理者にメール送信（実際の運用時のみ）
    if (process.env.NODE_ENV === 'production' && process.env.ADMIN_EMAIL) {
      await transporter.sendMail({
        from: process.env.SMTP_FROM || '"ATSURAEL" <noreply@atsurael.com>',
        to: process.env.ADMIN_EMAIL,
        subject: '【ATSURAEL】新しいフルオーダー相談',
        text: adminEmailContent,
      })
    }

    // お客様に自動返信送信（実際の運用時のみ）
    if (process.env.NODE_ENV === 'production') {
      await transporter.sendMail({
        from: process.env.SMTP_FROM || '"ATSURAEL" <noreply@atsurael.com>',
        to: data.customerEmail,
        subject: '【ATSURAEL】フルオーダー相談を受け付けました',
        text: customerEmailContent,
      })
    }

    // 開発環境ではコンソールに出力
    if (process.env.NODE_ENV === 'development') {
      console.log('=== フルオーダー相談受信 ===')
      console.log(adminEmailContent)
      console.log('\n=== 顧客自動返信 ===')
      console.log(customerEmailContent)
    }

    return NextResponse.json(
      { 
        message: '相談内容を送信しました',
        success: true 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('メール送信エラー:', error)
    return NextResponse.json(
      { error: 'メール送信に失敗しました' },
      { status: 500 }
    )
  }
}