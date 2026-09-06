import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー | T-SSA",
};

export default function PrivacyPage() {
  return (
    <main className="policy-page">
      <header className="policy-header"><Link href="/" className="brand"><span className="brand-mark">T</span><span className="brand-type"><b>T-SSA</b><small>TRACK &amp; FIELD CLUB</small></span></Link></header>
      <article className="policy-content">
        <p className="eyebrow eyebrow-blue">PRIVACY POLICY</p>
        <h1>プライバシーポリシー</h1>
        <p>T-SSA（以下「当クラブ」）は、お問い合わせ等でお預かりする個人情報を、以下の方針に基づき適切に取り扱います。</p>
        <h2>1. 取得する情報</h2>
        <p>お問い合わせへの対応に必要な範囲で、お名前、メールアドレス、お問い合わせ内容などを取得する場合があります。</p>
        <h2>2. 利用目的</h2>
        <p>取得した情報は、お問い合わせへの回答、体験参加に関する連絡、当クラブの運営に必要な案内のために利用します。</p>
        <h2>3. 第三者提供</h2>
        <p>法令に基づく場合を除き、ご本人の同意なく個人情報を第三者へ提供しません。</p>
        <h2>4. お問い合わせ</h2>
        <p>個人情報の取扱いに関するお問い合わせは、当クラブの案内する窓口までご連絡ください。</p>
        <p className="policy-date">制定日：2026年8月17日</p>
      </article>
    </main>
  );
}
