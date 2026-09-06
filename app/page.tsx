import { HeroCarousel } from "../components/HeroCarousel";

const CONTACT_EMAIL = "info@example.com";

const facts = [
  { label: "対象", value: "小学4年生〜中学3年生" },
  { label: "活動時間", value: "毎週土曜日 9:00〜12:00" },
  { label: "活動場所", value: "入野中学校グラウンドほか" },
];

const strengths = [
  {
    number: "01",
    title: "挑戦する心を育てる",
    text: "速く走ることだけがゴールではありません。一人ひとりの目標と気持ちを大切に、努力する喜びや達成する喜びを育てます。",
  },
  {
    number: "02",
    title: "心も身体も、しなやかに",
    text: "技術の向上とともに、礼儀や協調性、あきらめない気持ちを大切に。スポーツを通して、日々を前向きに過ごす力を応援します。",
  },
  {
    number: "03",
    title: "初心者も、もちろん歓迎",
    text: "競技経験がなくても大丈夫。楽しく身体を動かしたい人も、もっと上達したい人も、それぞれのペースで始められます。",
  },
];

const faqs = [
  {
    question: "陸上競技が初めてでも参加できますか？",
    answer:
      "はい。運動や陸上競技が初めての方も歓迎しています。基本的な動きづくりから、楽しみながら取り組める環境を目指しています。",
  },
  {
    question: "どのような服装・持ち物が必要ですか？",
    answer:
      "動きやすい服装、運動靴、飲み物、タオルをご用意ください。体験参加時の詳しい持ち物は、お問い合わせ後にご案内します。",
  },
  {
    question: "雨の日はどうなりますか？",
    answer:
      "天候や活動内容により、活動場所・内容が変更となる場合があります。変更時の連絡方法は、入会前のご案内でお伝えします。",
  },
  {
    question: "体験参加について相談できますか？",
    answer:
      "はい。対象学年や活動内容、体験参加に関するご質問は、下記メールアドレスからお気軽にお問い合わせください。",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MarkIcon({ type }: { type: "pin" | "clock" | "person" }) {
  if (type === "pin") {
    return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" stroke="currentColor" strokeWidth="1.9" /><circle cx="12" cy="10" r="2.7" stroke="currentColor" strokeWidth="1.9" /></svg>;
  }
  if (type === "clock") {
    return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.9" /><path d="M12 7v5l3.6 2.2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" /></svg>;
  }
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.9" /><path d="M5 20c.7-3.4 3-5.4 7-5.4s6.3 2 7 5.4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" /></svg>;
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="T-SSA トップへ">
        <span className="brand-mark">T</span>
        <span className="brand-type"><b>T-SSA</b><small>TRACK &amp; FIELD CLUB</small></span>
      </a>
      <nav aria-label="主要ナビゲーション">
        <a href="#about">クラブについて</a>
        <a href="#schedule">活動案内</a>
      </nav>
      <a className="header-cta" href="#trial">体験について相談する <ArrowIcon /></a>
    </header>
  );
}

export default function Home() {
  return (
    <main id="top">
      <Header />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span />TRACK &amp; FIELD CLUB / T-SSA</p>
          <h1 id="hero-title">一人ひとりの可能性を、<br /><em>未来の力に。</em></h1>
          <p className="hero-lead">走る、跳ぶ、投げる。挑戦する楽しさを通して、<br className="desktop-only" />自分らしく成長する力を育みます。</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#trial">無料体験について相談する <ArrowIcon /></a>
            <a className="text-link" href="#about">T-SSAについて <ArrowIcon /></a>
          </div>
          <p className="hero-note"><span className="pulse" />小学4年生〜中学3年生　初心者も歓迎しています</p>
        </div>
        <HeroCarousel />
      </section>

      <section className="quick-facts" aria-label="活動概要">
        {facts.map((fact, index) => (
          <div className="fact" key={fact.label}>
            <span className="fact-icon"><MarkIcon type={["person", "clock", "pin"][index] as "person" | "clock" | "pin"} /></span>
            <div><small>{fact.label}</small><strong>{fact.value}</strong></div>
          </div>
        ))}
      </section>

      <section className="section about-section" id="about" aria-labelledby="about-title">
        <div className="section-heading">
          <p className="eyebrow eyebrow-blue">ABOUT T-SSA</p>
          <h2 id="about-title">「やってみたい」が、<br />未来を動かす。</h2>
        </div>
        <div className="about-copy">
          <p>陸上競技を通して、技術だけではなく、心と身体を育てること。T-SSAは、そんな想いから生まれた小学生・中学生のための地域クラブです。</p>
          <p>記録を目指す人も、体力をつけたい人も、仲間と楽しく運動したい人も。目標の違いを大切にしながら、一歩ずつ前へ進むことを応援します。</p>
        </div>
      </section>

      <section className="strengths" aria-label="T-SSAが大切にすること">
        {strengths.map((strength) => (
          <article className="strength-card" key={strength.number}>
            <span className="card-number">{strength.number}</span>
            <div className="card-orbit" aria-hidden="true" />
            <h3>{strength.title}</h3>
            <p>{strength.text}</p>
          </article>
        ))}
      </section>

      <section className="section schedule-section" id="schedule" aria-labelledby="schedule-title">
        <div className="schedule-board">
          <div className="schedule-intro">
            <p className="eyebrow eyebrow-yellow">ACTIVITY GUIDE</p>
            <h2 id="schedule-title">まずは、<br />一緒に走ってみよう。</h2>
            <p>体験参加では、クラブの雰囲気や練習内容を実際に感じていただけます。初めての方も、安心してご参加ください。</p>
            <a className="button button-light" href="#trial">体験参加について相談する <ArrowIcon /></a>
          </div>
          <dl className="schedule-list">
            <div><dt><MarkIcon type="person" />対象</dt><dd>小学4年生〜中学3年生</dd></div>
            <div><dt><MarkIcon type="pin" />活動場所</dt><dd>入野中学校グラウンド<br />協働センター体育館 ほか</dd></div>
            <div><dt><MarkIcon type="clock" />活動時間</dt><dd>毎週土曜日 9:00〜12:00</dd></div>
          </dl>
        </div>
        <p className="schedule-caution">※天候や状況により、活動場所・内容が変更になる場合があります。</p>
      </section>

      <section className="section team-section" aria-labelledby="team-title">
        <div className="team-image" aria-hidden="true"><span>T-SSA</span></div>
        <div className="team-copy">
          <p className="eyebrow eyebrow-blue">COACHING</p>
          <h2 id="team-title">目標に寄り添う、<br />チームづくり。</h2>
          <p>一人ひとりの「できた」を積み重ねることを大切に、コーチ陣が日々の挑戦をサポートします。技術を学ぶ時間も、仲間と励まし合う時間も、未来の自分につながる大切な経験です。</p>
          <p className="team-note">コーチ紹介・詳しい活動内容は、順次掲載予定です。</p>
        </div>
      </section>

      <section className="section faq-section" aria-labelledby="faq-title">
        <div className="section-heading compact">
          <p className="eyebrow eyebrow-blue">FAQ</p>
          <h2 id="faq-title">よくあるご質問</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}<span>＋</span></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="trial-section" id="trial" aria-labelledby="trial-title">
        <div className="trial-inner">
          <p className="eyebrow eyebrow-yellow">TRIAL SESSION</p>
          <h2 id="trial-title">はじめの一歩を、<br />T-SSAと。</h2>
          <p>体験参加や活動内容について、まずはお気軽にお問い合わせください。</p>
          <a className="button button-primary button-wide" href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("T-SSA 体験参加について")}`}>体験参加について相談する <ArrowIcon /></a>
          <p className="contact-email"><span>お問い合わせ</span><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top"><span className="brand-mark">T</span><span className="brand-type"><b>T-SSA</b><small>TRACK &amp; FIELD CLUB</small></span></a>
        <p>Team Sanaru Super Athlete</p>
        <div><a href="/privacy/">プライバシーポリシー</a><span>© {new Date().getFullYear()} T-SSA</span></div>
      </footer>
    </main>
  );
}
