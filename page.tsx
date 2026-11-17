"use client";

import { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  Globe2,
  Headphones,
  Languages,
  Menu,
  MessageCircle,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  TicketCheck,
  X,
  Zap
} from "lucide-react";

type Language = "ar" | "fr" | "en";

const copy = {
  en: {
    nav: ["Platform", "How it works", "Features", "For business"],
    login: "Log in",
    start: "Get started",
    eyebrow: "CUSTOMER EXPERIENCE, REIMAGINED",
    titleA: "Every customer",
    titleB: "deserves an",
    titleC: "intelligent answer.",
    intro:
      "One smart workspace for customer conversations, complaints, and support — built for the way businesses work in Morocco.",
    primary: "Explore the platform",
    secondary: "See how it works",
    trusted: "MADE FOR MOROCCAN BUSINESSES",
    chatLabel: "LIVE AI ASSISTANT",
    online: "Online now",
    customer: "Hi, fin waslat commande dyali? T3etlat بزاف.",
    bot:
      "Marhba! سمح لينا على التأخير. عطيني رقم الطلب ديالك ونشوف ليك الحالة دابا.",
    placeholder: "Write your message...",
    send: "Send",
    ticket: "Complaint created",
    ticketId: "Ticket #CK-2048",
    ticketStatus: "In progress",
    stats: [
      ["24/7", "AI assistance"],
      ["3", "Languages"],
      ["1", "Unified inbox"]
    ],
    sectionEyebrow: "ONE PLATFORM. FULL CONTROL.",
    sectionTitle: "Customer support, without the chaos.",
    sectionText:
      "Bring every customer request into one clear workflow. Let AI handle the routine, while your team focuses on what matters.",
    features: [
      ["AI conversations", "Answer common questions instantly, in the customer's language.", "bot"],
      ["Complaint management", "Create, assign, prioritize, and track every complaint.", "ticket"],
      ["Human handover", "Move sensitive or complex conversations to your team.", "support"],
      ["Business knowledge", "Give the assistant accurate answers from your own content.", "knowledge"]
    ],
    howEyebrow: "SIMPLE BY DESIGN",
    howTitle: "From first message to resolution.",
    steps: [
      ["Connect your business", "Add your company details, services, policies, and FAQs."],
      ["Let AI assist", "Your assistant understands customer questions and replies naturally."],
      ["Resolve with confidence", "Track every ticket and bring in a human whenever needed."]
    ],
    languagesTitle: "Your customers speak. CHIKAYA AI understands.",
    languagesText:
      "Darija, French, and English — including everyday Moroccan Darija written in Latin characters.",
    ctaTitle: "Ready to make support feel effortless?",
    ctaText: "Build a calmer, faster customer experience for your business.",
    cta: "Start building",
    footer: "Smart support for every conversation.",
    menu: "Open menu"
  },
  fr: {
    nav: ["Plateforme", "Fonctionnement", "Fonctionnalités", "Entreprises"],
    login: "Connexion",
    start: "Commencer",
    eyebrow: "L'EXPÉRIENCE CLIENT, RÉINVENTÉE",
    titleA: "Chaque client",
    titleB: "mérite une",
    titleC: "réponse intelligente.",
    intro:
      "Un espace intelligent pour les conversations, les réclamations et le support client — conçu pour les entreprises au Maroc.",
    primary: "Découvrir la plateforme",
    secondary: "Voir le fonctionnement",
    trusted: "PENSÉ POUR LES ENTREPRISES MAROCAINES",
    chatLabel: "ASSISTANT IA EN DIRECT",
    online: "En ligne",
    customer: "Bonjour, où est ma commande ? Elle a beaucoup de retard.",
    bot:
      "Bienvenue ! Désolé pour ce retard. Donnez-moi votre numéro de commande et je vérifie son statut.",
    placeholder: "Écrivez votre message...",
    send: "Envoyer",
    ticket: "Réclamation créée",
    ticketId: "Ticket #CK-2048",
    ticketStatus: "En cours",
    stats: [
      ["24/7", "Assistance IA"],
      ["3", "Langues"],
      ["1", "Boîte de réception"]
    ],
    sectionEyebrow: "UNE PLATEFORME. UN CONTRÔLE TOTAL.",
    sectionTitle: "Le support client, sans le désordre.",
    sectionText:
      "Centralisez chaque demande dans un processus clair. L'IA gère les demandes courantes et votre équipe se concentre sur l'essentiel.",
    features: [
      ["Conversations IA", "Répondez instantanément aux questions fréquentes.", "bot"],
      ["Gestion des réclamations", "Créez, attribuez et suivez chaque réclamation.", "ticket"],
      ["Relais humain", "Transférez les conversations complexes à votre équipe.", "support"],
      ["Base de connaissances", "Fournissez des réponses fiables à partir de vos contenus.", "knowledge"]
    ],
    howEyebrow: "SIMPLE PAR CONCEPTION",
    howTitle: "Du premier message à la résolution.",
    steps: [
      ["Connectez votre entreprise", "Ajoutez vos services, politiques et questions fréquentes."],
      ["Laissez l'IA vous aider", "Votre assistant comprend les demandes et répond naturellement."],
      ["Résolvez en confiance", "Suivez les tickets et faites intervenir un agent si besoin."]
    ],
    languagesTitle: "Vos clients parlent. CHIKAYA AI comprend.",
    languagesText:
      "Darija, français et anglais — y compris la darija marocaine écrite en alphabet latin.",
    ctaTitle: "Prêt à simplifier votre support client ?",
    ctaText: "Offrez une expérience client plus fluide et plus rapide.",
    cta: "Commencer",
    footer: "Un support intelligent pour chaque conversation.",
    menu: "Ouvrir le menu"
  },
  ar: {
    nav: ["المنصة", "كيف تعمل", "المميزات", "للشركات"],
    login: "تسجيل الدخول",
    start: "ابدأ الآن",
    eyebrow: "تجربة جديدة لخدمة العملاء",
    titleA: "كل زبون",
    titleB: "يستحق",
    titleC: "جواباً ذكياً.",
    intro:
      "منصة ذكية تجمع محادثات الزبناء والشكايات وخدمة العملاء، ومصممة لتناسب طريقة عمل الشركات في المغرب.",
    primary: "اكتشف المنصة",
    secondary: "كيف تعمل؟",
    trusted: "مصممة للشركات المغربية",
    chatLabel: "المساعد الذكي المباشر",
    online: "متصل الآن",
    customer: "سلام، فين وصلات الكوموند ديالي؟ تأخرات بزاف.",
    bot:
      "مرحبا بيك! سمح لينا على التأخير. عطيني رقم الطلب ديالك ونشوف ليك الحالة دابا.",
    placeholder: "اكتب رسالتك...",
    send: "إرسال",
    ticket: "تم إنشاء الشكاية",
    ticketId: "رقم التذكرة #CK-2048",
    ticketStatus: "قيد المعالجة",
    stats: [
      ["24/7", "مساعدة بالذكاء الاصطناعي"],
      ["3", "لغات"],
      ["1", "صندوق موحد"]
    ],
    sectionEyebrow: "منصة واحدة. تحكم كامل.",
    sectionTitle: "خدمة العملاء بلا فوضى.",
    sectionText:
      "جمع جميع طلبات الزبناء في مكان واحد. خلي الذكاء الاصطناعي يتكلف بالأسئلة المتكررة، وفريقك يركز على الحلول المهمة.",
    features: [
      ["محادثات ذكية", "أجوبة فورية على الأسئلة المتكررة بلغة الزبون.", "bot"],
      ["تدبير الشكايات", "إنشاء الشكايات وتوزيعها وتتبع كل طلب.", "ticket"],
      ["التدخل البشري", "تحويل المحادثات المعقدة إلى فريق الدعم.", "support"],
      ["قاعدة معلومات الشركة", "إجابات دقيقة اعتماداً على معلومات شركتك.", "knowledge"]
    ],
    howEyebrow: "البساطة في التصميم",
    howTitle: "من أول رسالة حتى حل المشكل.",
    steps: [
      ["ربط شركتك", "أضف معلومات الشركة والخدمات والسياسات والأسئلة المتكررة."],
      ["دع الذكاء الاصطناعي يساعدك", "المساعد يفهم أسئلة الزبناء ويجيب بطريقة طبيعية."],
      ["حل المشاكل بثقة", "تتبع كل شكاية وتدخل بشري عند الحاجة."]
    ],
    languagesTitle: "الزبناء كيهضرو. CHIKAYA AI كيفهم.",
    languagesText:
      "الدارجة والفرنسية والإنجليزية، وحتى الدارجة المكتوبة بالحروف اللاتينية.",
    ctaTitle: "واش واجد تطور خدمة الزبناء ديالك؟",
    ctaText: "وفر تجربة أسرع وأسهل لزبنائك.",
    cta: "ابدأ الآن",
    footer: "دعم ذكي لكل محادثة.",
    menu: "فتح القائمة"
  }
};

function FeatureIcon({ kind }: { kind: string }) {
  if (kind === "ticket") return <TicketCheck size={21} />;
  if (kind === "support") return <Headphones size={21} />;
  if (kind === "knowledge") return <CircleHelp size={21} />;
  return <Bot size={21} />;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useMemo(() => copy[language], [language]);
  const rtl = language === "ar";

  return (
    <main dir={rtl ? "rtl" : "ltr"} className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar container">
        <a className="brand" href="#" aria-label="CHIKAYA AI home">
          <span className="brand-mark"><MessageSquareText size={22} /></span>
          <span className="brand-name">CHIKAYA<span>AI</span></span>
        </a>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#platform">{t.nav[0]}</a>
          <a href="#how">{t.nav[1]}</a>
          <a href="#features">{t.nav[2]}</a>
          <a href="#business">{t.nav[3]}</a>
        </nav>

        <div className="top-actions">
          <label className="language-picker" aria-label="Choose language">
            <Globe2 size={16} />
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value as Language)}
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="ar">ع</option>
            </select>
            <ChevronDown size={13} />
          </label>
          <a className="login-link" href="#business">{t.login}</a>
          <a className="button button-small" href="#business">
            {t.start} <ArrowUpRight size={15} />
          </a>
        </div>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={t.menu}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section id="platform" className="hero container">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" />{t.eyebrow}</div>
          <h1>
            {t.titleA}<br />
            {t.titleB}<br />
            <span>{t.titleC}</span>
          </h1>
          <p className="hero-description">{t.intro}</p>
          <div className="hero-actions">
            <a className="button" href="#features">{t.primary} <ArrowRight size={17} /></a>
            <a className="text-button" href="#how"><span className="play-icon"><ArrowDown size={15} /></span>{t.secondary}</a>
          </div>
          <div className="trust-line">
            <ShieldCheck size={16} />
            <span>{t.trusted}</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="chat-window">
            <div className="chat-header">
              <div className="assistant-avatar"><Bot size={21} /></div>
              <div className="chat-heading">
                <strong>CHIKAYA Assistant</strong>
                <span><i />{t.online}</span>
              </div>
              <div className="chat-menu"><span /><span /><span /></div>
            </div>
            <div className="chat-body">
              <div className="chat-date">TODAY · 10:42 AM</div>
              <div className="message customer-message">{t.customer}</div>
              <div className="message bot-message">
                <div className="bot-mini"><Sparkles size={13} /> CHIKAYA AI</div>
                {t.bot}
              </div>
              <div className="ticket-card">
                <div className="ticket-icon"><TicketCheck size={17} /></div>
                <div className="ticket-info"><strong>{t.ticket}</strong><span>{t.ticketId}</span></div>
                <span className="ticket-status">{t.ticketStatus}</span>
              </div>
              <div className="chat-input">
                <span>{t.placeholder}</span>
                <button aria-label={t.send}><ArrowUpRight size={17} /></button>
              </div>
            </div>
          </div>
          <div className="floating-pill pill-top"><span className="pulse-dot" /><span>AI RESPONSE</span><strong>1.2s</strong></div>
          <div className="floating-pill pill-bottom"><Languages size={16} /><strong>Darija · FR · EN</strong><Check size={15} /></div>
        </div>
      </section>

      <section className="stats-strip container" aria-label="Platform highlights">
        {t.stats.map(([value, label]) => (
          <div className="stat" key={label}>
            <strong>{value}</strong><span>{label}</span>
          </div>
        ))}
      </section>

      <section id="features" className="section container">
        <div className="section-heading">
          <div className="eyebrow"><span className="eyebrow-dot" />{t.sectionEyebrow}</div>
          <h2>{t.sectionTitle}</h2>
          <p>{t.sectionText}</p>
        </div>
        <div className="feature-grid">
          {t.features.map(([title, description, icon], index) => (
            <article className="feature-card" key={title}>
              <div className="feature-top">
                <span className="feature-icon"><FeatureIcon kind={icon} /></span>
                <span className="feature-number">0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="feature-arrow"><ArrowUpRight size={17} /></span>
            </article>
          ))}
        </div>
      </section>

      <section id="how" className="how-section">
        <div className="container how-inner">
          <div className="section-heading">
            <div className="eyebrow"><span className="eyebrow-dot" />{t.howEyebrow}</div>
            <h2>{t.howTitle}</h2>
          </div>
          <div className="steps-grid">
            {t.steps.map(([title, description], index) => (
              <div className="step" key={title}>
                <div className="step-index">0{index + 1}<span /></div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="business" className="language-section container">
        <div className="language-card">
          <div className="language-copy">
            <div className="eyebrow"><span className="eyebrow-dot" />BUILT FOR MOROCCO</div>
            <h2>{t.languagesTitle}</h2>
            <p>{t.languagesText}</p>
          </div>
          <div className="language-orbs">
            <div className="language-orb orb-ar"><span>ع</span><small>DARIJA</small></div>
            <div className="language-orb orb-fr"><span>FR</span><small>FRANÇAIS</small></div>
            <div className="language-orb orb-en"><span>EN</span><small>ENGLISH</small></div>
          </div>
        </div>
      </section>

      <section className="container cta-section">
        <div className="cta-card">
          <div className="cta-spark"><Zap size={23} /></div>
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaText}</p>
          <a className="button button-light" href="mailto:hello@chikaya.ai">{t.cta} <ArrowRight size={17} /></a>
        </div>
      </section>

      <footer className="footer container">
        <a className="brand" href="#">
          <span className="brand-mark"><MessageSquareText size={19} /></span>
          <span className="brand-name">CHIKAYA<span>AI</span></span>
        </a>
        <p>{t.footer}</p>
        <span className="copyright">© 2026 CHIKAYA AI</span>
      </footer>
    </main>
  );
}