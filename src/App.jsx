import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, Route, Routes, useParams } from "react-router-dom";
import {
  Lightbulb, Wrench, Target, BookOpen, ShoppingBag, Globe, Settings,
  Smartphone, Search, Package, Scale, GraduationCap, Server, Layers, Cpu,
  TrendingUp, Users, Award, Code2
} from "lucide-react";
import "./App.css";
import portrait from "../IMG_5504.jpg";
import predictAirImage from "../2-transparent.png";
import ufcLogo from "../UFC-new-logo.png";
import pipeSharkLogo from "../20260204_0936_Image Generation_remix_01kgkwn3wfer6r8wcexbxqa33a.png";
import dodgeUpLogo from "../1-transparent.png";
import kraviumLogo from "../Kravium - 2026-05-24T160449.514.png";
import senateLogo from "../French_Senate_Logo.svg.png";
import hackathonCertificate from "../Certificat_Hackathon_Eugenia Master.pdf";
import hackathonPayfitPdf from "../HACKATHON PAYFIT.pdf";
import cvPdf from "../CV - Georges DOXUAN.pdf";
import hackathonIcon from "../achievement-award-medal-icon.svg";
import extiaLogo from "../Extia_2026_logo.webp";
import icpLogo from "../Logo_ICP.png";
import eugeniaLogo from "../channels4_profile.jpg";
import fluctuartLogo from "../imageseefj.png";

const content = {
  fr: {
    nav: ["Profil", "Projets", "Expériences", "Formation", "Contact"],
    eyebrow: "Portfolio",
    subtitle: "22 ans · Paris · MSc AI Applied to Business · Chargé de projet IA chez Extia (alternance)",
    intro:
      "Je conçois des produits IA orientés business, de l'idée au déploiement.",
    ctaProjects: "Voir mes projets",
    ctaCv: "Voir mon CV",
    aboutTitle: "Profil",
    aboutBody1:
      "En MSc AI Applied to Business à Eugenia School, je suis en alternance chez Extia comme Chargé de projet IA.",
    aboutBody2:
      "Je développe aussi des projets entrepreneuriaux et data avec une approche produit orientée résultats.",
    skillsTitle: "Compétences",
    skills: [
      "LLM",
      "RAG (Retrieval-Augmented Generation)",
      "Automatisation",
      "Dataiku",
      "Tableau",
      "Supabase",
      "GitHub",
      "Vercel",
      "Cursor",
      "Claude Code",
      "Visual Studio Code",
      "Excel",
      "Google Sheets",
      "Airtable",
      "Notion",
      "Make",
      "n8n",
      "Canva",
      "Unity",
      "Logic Pro",
      "Final Cut Pro",
      "Dust",
      "Blender"
    ],
    projectsTitle: "Projets",
    projectsSubtitle: "Mes réalisations et produits",
    languagesTitle: "Langues",
    languages: [
      "Français : bilingue",
      "Anglais : bilingue",
      "Espagnol : notions conversationnelles"
    ],
    openProject: "Ouvrir le projet",
    experienceTitle: "Expériences",
    educationTitle: "Formation & distinction",
    contactTitle: "Contact",
    downloadCertificate: "Télécharger le certificat",
    hackathonProjectTitle: "Hackathon Eugenia School",
    hackathonProjectRole: "2 hackathons · 1re place puis 2e place",
    hackathonProjectDescription:
      "Participation à 2 hackathons Eugenia School : 1re place au premier (Build the Future), puis 2e place au second.",
    extiaDate: "Paris, France · Depuis 2025",
    senatDate: "Paris, France · 2024",
    fluctuartDate: "Paris, France · Juillet 2024 · Août 2024 et Juillet 2025 · Août 2025"
  },
  en: {
    nav: ["Profile", "Projects", "Experience", "Education", "Contact"],
    eyebrow: "Portfolio",
    subtitle: "22 years old · Paris · MSc AI Applied to Business · AI Project Manager at Extia (work-study)",
    intro:
      "I build business-focused AI products from idea to deployment.",
    ctaProjects: "View projects",
    ctaCv: "View my CV",
    aboutTitle: "Profile",
    aboutBody1:
      "I am pursuing an MSc in AI Applied to Business at Eugenia School and working at Extia as an AI Project Manager.",
    aboutBody2:
      "In parallel, I build entrepreneurial and data projects with a product mindset focused on results.",
    skillsTitle: "Skills",
    skills: [
      "LLM",
      "RAG (Retrieval-Augmented Generation)",
      "Automation",
      "Dataiku",
      "Tableau",
      "Supabase",
      "GitHub",
      "Vercel",
      "Cursor",
      "Claude Code",
      "Visual Studio Code",
      "Excel",
      "Google Sheets",
      "Airtable",
      "Notion",
      "Make",
      "n8n",
      "Canva",
      "Unity",
      "Logic Pro",
      "Final Cut Pro",
      "Dust",
      "Blender"
    ],
    projectsTitle: "Projects",
    projectsSubtitle: "My projects and products",
    languagesTitle: "Languages",
    languages: [
      "French: bilingual",
      "English: bilingual",
      "Spanish: conversational basics"
    ],
    openProject: "Open project",
    experienceTitle: "Experience",
    educationTitle: "Education & Awards",
    contactTitle: "Contact",
    downloadCertificate: "Download certificate",
    hackathonProjectTitle: "Eugenia School Hackathon",
    hackathonProjectRole: "2 hackathons · 1st place then 2nd place",
    hackathonProjectDescription:
      "Participated in 2 Eugenia School hackathons: 1st place in the first one (Build the Future), then 2nd place in the second one.",
    extiaDate: "Paris, France · Since 2025",
    senatDate: "Paris, France · 2024",
    fluctuartDate: "Paris, France · Jul 2024 · Aug 2024 and Jul 2025 · Aug 2025"
  }
};

function HomePage({ language, theme, setLanguage, t, projects }) {
  const featured = projects;

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="hero" id="top">
        <nav className="nav container">
          <a className="brand" href="#top">
            <span className="brandBadge">GD</span>
            <span>Georges Do Xuan</span>
          </a>
          <div className="navLinks">
            <a href="#top">{t.nav[0]}</a>
            <a href="#projects">{t.nav[1]}</a>
            <a href="#experience">{t.nav[2]}</a>
            <a href="#education">{t.nav[3]}</a>
            <a href="#contact">{t.nav[4]}</a>
          </div>
          <div className="actions">
            <button
              className="chip"
              onClick={() => setLanguage((current) => (current === "fr" ? "en" : "fr"))}
            >
              {language === "fr" ? "EN" : "FR"}
            </button>
          </div>
        </nav>

        <div className="heroContent container reveal">
          <div>
            <h1>Georges Do Xuan</h1>
            <p className="subtitle">{t.subtitle}</p>
            <p>{t.intro}</p>
            <p>{t.aboutBody1}</p>
            <p>{t.aboutBody2}</p>
            <a className="btn" href="#projects">
              {t.ctaProjects}
            </a>
            <a className="btn btnGhost" href={cvPdf} target="_blank" rel="noreferrer">
              {t.ctaCv}
            </a>
          </div>
          <img className="portrait" src={portrait} alt="Portrait de Georges Do Xuan" />
        </div>

        <div className="container statsRow reveal">
          <a className="statCardLink" href="#projects">
            <article className="statCard">
              <p className="statValue">7+</p>
              <p className="statLabel">{language === "fr" ? "Projets" : "Projects"}</p>
            </article>
          </a>
          <a className="statCardLink" href="#skills">
            <article className="statCard">
              <p className="statValue">{t.skills.length}</p>
              <p className="statLabel">{language === "fr" ? "Compétences clés" : "Core skills"}</p>
            </article>
          </a>
          <a className="statCardLink" href="#experience">
            <article className="statCard">
              <p className="statValue">3</p>
              <p className="statLabel">{language === "fr" ? "Expériences" : "Experiences"}</p>
            </article>
          </a>
          <a className="statCardLink" href="#projects">
            <article className="statCard">
              <p className="statValue">🏆</p>
              <p className="statLabel">
                {language === "fr" ? "2 hackathons (1re place, 2e place)" : "2 hackathons (1st place, 2nd place)"}
              </p>
            </article>
          </a>
        </div>
      </header>

      <main>
        <section className="section container reveal" id="projects">
          <div className="sectionHeading">
            <div>
              <h2>{t.projectsTitle}</h2>
              <p className="sectionSub">{t.projectsSubtitle}</p>
            </div>
          </div>
          <div className="projectFeaturedGrid">
            {featured.map((project) => (
              <Link key={project.slug} className="projectCardLink" to={`/projects/${project.slug}`}>
                <article className="projectCard reveal featuredCard">
                  {project.image ? (
                    <img
                      className={`projectThumb ${project.imageFit === "contain" ? "containThumb" : ""} ${project.frameless ? "framelessThumb smallThumb" : ""} ${project.imageClass || ""}`}
                      src={project.image}
                      alt={project.title}
                    />
                  ) : null}
                  <div>
                    <p className="badge">{project.type}</p>
                    <h3>{project.title}</h3>
                    <p className="tag">{project.role}</p>
                    <p className="projectDescription">{project.description}</p>
                    <span className="projectAction">
                      {language === "fr" ? "Voir les détails" : "View details"}
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        <section className="section container reveal" id="skills">
          <h2>{t.skillsTitle}</h2>
          <div className="skillGrid">
            {t.skills.map((skill) => (
              <span key={skill} className="skillBadge">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="section container reveal" id="languages">
          <h2>{t.languagesTitle}</h2>
          <div className="skillGrid">
            {t.languages.map((languageItem) => (
              <span key={languageItem} className="skillBadge">
                {languageItem}
              </span>
            ))}
          </div>
        </section>

        <section className="section container reveal" id="experience">
          <h2>{t.experienceTitle}</h2>
          <div className="timeline">
            <article className="card reveal">
              <div className="experienceHeader">
                <img className="experienceLogo extiaLogo" src={extiaLogo} alt="Logo Extia" />
                <div>
                  <h3>Extia · Chargé de projet IA (Alternance)</h3>
                  <p className="meta">{t.extiaDate}</p>
                </div>
              </div>
              <p>
                {language === "fr"
                  ? "Je cadre et pilote des projets IA pour des enjeux métiers : identification des besoins, priorisation des use cases, coordination des parties prenantes, et suivi du déploiement de solutions (automatisation, IA générative, data workflows)."
                  : "I scope and drive AI projects for business teams: needs assessment, use-case prioritization, stakeholder coordination, and deployment follow-up for automation, generative AI, and data workflows."}
              </p>
            </article>

            <article className="card reveal">
              <div className="experienceHeader">
                <img className="experienceLogo" src={senateLogo} alt="Logo du Sénat" />
                <div>
                  <h3>Sénat · Institution Parlementaire · Stagiaire</h3>
                  <p className="meta">{t.senatDate}</p>
                </div>
              </div>
              <ul>
                <li>Rédaction de discours et de questions politiques pour un sénateur.</li>
                <li>Préparation de dossiers législatifs et recherches d'actualité.</li>
              </ul>
            </article>

            <article className="card minorExperience reveal">
              <div className="experienceHeader">
                <img className="experienceLogo fluctuartLogo" src={fluctuartLogo} alt="Logo Fluctuart" />
                <div>
                  <h3>Fluctuart à Restaurant · Commis de restaurant</h3>
                  <p className="meta">{t.fluctuartDate}</p>
                </div>
              </div>
              <ul>
                <li>Support opérationnel en service à fort volume.</li>
                <li>Assistance à l'équipe salle/bar et maintien des espaces.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section container reveal" id="education">
          <h2>{t.educationTitle}</h2>
          <div className="grid twoCols">
            <article className="card reveal">
              <div className="experienceHeader">
                <img className="experienceLogo eugeniaLogo" src={eugeniaLogo} alt="Logo Eugenia School" />
                <div>
                  <h3>Eugenia School</h3>
                  <p className="meta">MSc AI Applied to Business · Depuis septembre 2025</p>
                </div>
              </div>
            </article>
            <article className="card reveal">
              <div className="experienceHeader">
                <img className="experienceLogo icpLogo" src={icpLogo} alt="Logo Institut Catholique de Paris" />
                <div>
                  <h3>Institut Catholique de Paris</h3>
                  <p className="meta">
                    {language === "fr"
                      ? "Licence d'histoire-géographie (3 ans) · 2022 · 2025"
                      : "Bachelor's degree in History-Geography (3 years) · 2022 · 2025"}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="container">
          <h2>{t.contactTitle}</h2>
          <p>Paris, France</p>
          <p>
            <a href="tel:+33783994568">(+33) 7 83 99 45 68</a>
          </p>
          <p>
            <a href="mailto:georgescdoxuan@gmail.com">georgescdoxuan@gmail.com</a>
          </p>
        </div>
      </footer>
    </>
  );
}

function ProjectDetailPage({ projects, language }) {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const backLabel = language === "fr" ? "← Retour aux projets" : "← Back to projects";
  const visitLabel = language === "fr" ? "Voir le projet" : "Open project";

  return (
    <div className="projectPage">
      <div className="container projectPageInner">
        <Link to="/#projects" className="projectBackLink">{backLabel}</Link>

        <div className="projectDetailHero">
          {project.image && (
            <div className={`projectDetailImgWrap ${project.frameless ? "projectDetailImgWrapFrameless" : ""}`}>
              <img
                className={`projectDetailImg ${project.frameless ? "projectDetailImgFrameless" : ""} ${project.imageClass || ""}`}
                src={project.image}
                alt={project.title}
              />
            </div>
          )}
          <div className="projectDetailMeta">
            <p className="badge">{project.type}</p>
            <h1 className="projectDetailTitle">{project.title}</h1>
            <p className="tag">{project.role}</p>
            <p className="projectDetailLead">{project.description}</p>
            <a className="btn" href={project.link} target="_blank" rel="noreferrer">
              {visitLabel}
            </a>
          </div>
        </div>

        {project.sections && (
          <div className="detailSectionsGrid">
            {project.sections.map((section, i) => {
              const Icon = section.icon;
              return (
                <div key={i} className="detailSection">
                  <h3 className="detailSectionTitle">
                    <span className="detailSectionIcon"><Icon size={18} strokeWidth={2} /></span>
                    {section.title}
                  </h3>
                  {section.text && <p className="detailSectionText">{section.text}</p>}
                  {section.bullets && (
                    <ul className="detailBullets">
                      {section.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [language, setLanguage] = useState("fr");
  const theme = "light";
  const t = content[language];

  const projects = useMemo(
    () => [
      {
        slug: "pipeshark",
        title: "Pipeshark",
        type: "SaaS",
        role: language === "fr" ? "Fondateur" : "Founder",
        description:
          language === "fr"
            ? "Plateforme pour prospecter des entreprises locales : Pipeshark trouve des leads via Google Maps et automatise l'envoi d'emails personnalisés par IA."
            : "Prospecting platform to target local businesses: Pipeshark finds leads via Google Maps and automates AI-personalized email sending.",
        sections: language === "fr" ? [
          { icon: Lightbulb, title: "Concept", text: "Pipeshark est une plateforme SaaS B2B qui industrialise la prospection commerciale locale. Elle cible des TPE/PME par secteur d'activité et zone géographique, génère des leads qualifiés via Google Maps, et envoie des emails personnalisés par IA : sans intervention manuelle." },
          { icon: Settings, title: "Comment ça marche", bullets: ["Scraping de leads via Google Maps par secteur et zone géographique", "Qualification automatique des données (nom, contact, activité, adresse)", "Génération d'emails personnalisés par LLM selon le profil du prospect", "Envoi automatisé et suivi via workflow Make / n8n"] },
          { icon: Wrench, title: "Stack", bullets: ["Google Maps API : génération de leads locaux", "Make / n8n : orchestration des workflows", "LLM (Claude / GPT) : personnalisation des emails", "Supabase : stockage des leads", "Vercel : déploiement"] },
          { icon: Target, title: "Ce que j'en ai retiré", bullets: ["Conception d'un produit SaaS de A à Z en solo", "Maîtrise des workflows d'automatisation (Make, n8n)", "Approche growth orientée résultats et ROI", "Branding, acquisition et positionnement produit"] },
        ] : [
          { icon: Lightbulb, title: "Concept", text: "Pipeshark is a B2B SaaS platform that industrializes local sales prospecting. It targets SMBs by sector and location, generates qualified leads via Google Maps, and sends AI-personalized emails : without manual input." },
          { icon: Settings, title: "How it works", bullets: ["Lead scraping via Google Maps by sector and geography", "Automatic data qualification (name, contact, activity, address)", "LLM-generated personalized emails based on each prospect's profile", "Automated sending and tracking via Make / n8n workflow"] },
          { icon: Wrench, title: "Stack", bullets: ["Google Maps API : local lead generation", "Make / n8n : workflow orchestration", "LLM (Claude / GPT) : email personalization", "Supabase : lead database", "Vercel : deployment"] },
          { icon: Target, title: "Key takeaways", bullets: ["End-to-end SaaS product design as a solo founder", "Automation workflow mastery (Make, n8n)", "Results-driven growth approach", "Branding, acquisition and product positioning"] },
        ],
        link: "https://pipeshark.io/landing",
        image: pipeSharkLogo,
        imageFit: "contain",
        frameless: true
      },
      {
        slug: "kravium",
        title: "Kravium",
        type: "E-commerce",
        role: language === "fr" ? "Fondateur · E-commerce" : "Founder · E-commerce",
        description:
          language === "fr"
            ? "Marque de vêtements techniques pour MMA, grappling et BJJ, vendue en ligne sur kravium.com."
            : "Technical apparel brand for MMA, grappling, and BJJ, sold online at kravium.com.",
        sections: language === "fr" ? [
          { icon: ShoppingBag, title: "Le produit", bullets: ["Rashguards manches courtes en ice silk (87% polyester / 13% spandex) : léger, élastique, gestion thermique", "4 designs : L'Épée (bleu clair), L'Étoile (blanc crème), Motif Végétal (gris/blanc), Noir", "Disponibles du XS au 6XL : pour tous les gabarits", "Sac de sport Kravium"] },
          { icon: Target, title: "Positionnement", text: "Équipement de combat premium accessible, entre le bas de gamme générique et les grandes marques établies (Hayabusa, Venum). Le rapport qualité-prix est l'argument central." },
          { icon: Globe, title: "Marché cible", bullets: ["Pratiquants de MMA, grappling et BJJ", "Europe : France, Belgique, Suisse, Espagne, Italie, Allemagne, Pays-Bas, Scandinavie", "Profil : compétiteurs et pratiquants réguliers"] },
          { icon: Wrench, title: "Ce que j'ai géré", bullets: ["Création de la marque : naming, identité visuelle, logo", "Lancement du site e-commerce (kravium.com)", "Gestion des fournisseurs et de la production", "Marketing et acquisition sur les réseaux sociaux"] },
          { icon: GraduationCap, title: "Ce que j'en ai retiré", bullets: ["Entrepreneuriat produit physique de A à Z", "E-commerce : UX, conversion, logistique", "Branding dans un marché de niche sportive", "Gestion fournisseurs internationale"] },
        ] : [
          { icon: ShoppingBag, title: "The product", bullets: ["Short-sleeve rashguards in ice silk (87% polyester / 13% spandex) : lightweight, stretchy, thermal management", "4 designs: L'Épée (light blue), L'Étoile (cream white), Motif Végétal (grey/white), Black", "Available XS to 6XL : for all body types", "Kravium gym bag"] },
          { icon: Target, title: "Positioning", text: "Premium accessible fight gear : between generic entry-level and established brands (Hayabusa, Venum). Value for money is the core argument." },
          { icon: Globe, title: "Target market", bullets: ["MMA, grappling and BJJ practitioners", "Europe: France, Belgium, Switzerland, Spain, Italy, Germany, Netherlands, Scandinavia", "Profile: competitors and regular practitioners"] },
          { icon: Wrench, title: "What I handled", bullets: ["Brand creation: naming, visual identity, logo", "E-commerce site launch (kravium.com)", "Supplier and production management", "Social media marketing and acquisition"] },
          { icon: GraduationCap, title: "Key takeaways", bullets: ["Physical product entrepreneurship end-to-end", "E-commerce: UX, conversion, logistics", "Branding in a niche sports market", "International supplier management"] },
        ],
        link: "https://kravium.com",
        image: kraviumLogo,
        imageFit: "contain",
        frameless: true
      },
      {
        slug: "dodge-up",
        title: "Dodge Up",
        type: language === "fr" ? "Appli mobile" : "Mobile app",
        role: language === "fr" ? "Fondateur · App iOS" : "Founder · iOS App",
        description:
          language === "fr"
            ? "Application de reflex training pour sports de combat avec partenaire virtuel et frappes aléatoires en temps réel."
            : "Reflex training app for combat sports with a virtual partner and randomized real-time strikes.",
        sections: language === "fr" ? [
          { icon: Smartphone, title: "Concept", text: "Dodge Up est une app iOS d'entraînement défensif pour sports de combat. Elle simule un adversaire virtuel qui génère des frappes aléatoires en temps réel : l'objectif est de travailler esquives, réactivité et timing sans équipement ni partenaire." },
          { icon: Target, title: "Fonctionnalités", bullets: ["Adversaire virtuel simulant des frappes aléatoires en temps réel", "Travail de l'esquive, de la réactivité et du timing", "Interface simple et rapide à prendre en main", "Utilisable partout, sans équipement ni partenaire", "Disponible sur l'App Store"] },
          { icon: Wrench, title: "Stack", bullets: ["Swift / SwiftUI : développement iOS natif", "App Store : distribution et publication"] },
          { icon: GraduationCap, title: "Ce que j'en ai retiré", bullets: ["Développement d'une app iOS native de A à Z", "UX / gameplay sur mobile : simplicité et fluidité", "Publication App Store : review, guidelines, mise en ligne", "Iteration produit sur feedback utilisateurs"] },
        ] : [
          { icon: Smartphone, title: "Concept", text: "Dodge Up is an iOS training app for combat sports. It simulates a virtual opponent generating random strikes in real time : the goal is to train dodging, reaction time, and timing without equipment or a partner." },
          { icon: Target, title: "Features", bullets: ["Virtual opponent generating random real-time strikes", "Trains dodging, reactivity, and timing", "Simple, fast UI with no learning curve", "Works anywhere : no equipment or training partner needed", "Available on the App Store"] },
          { icon: Wrench, title: "Stack", bullets: ["Swift / SwiftUI : native iOS development", "App Store : distribution and publishing"] },
          { icon: GraduationCap, title: "Key takeaways", bullets: ["Native iOS app development end-to-end", "Mobile UX / gameplay: simplicity and fluidity", "App Store publishing: review, guidelines, launch", "Product iteration based on user feedback"] },
        ],
        link: "https://apps.apple.com/fr/app/dodge-up-train-your-defense/id6747579781",
        image: dodgeUpLogo,
        imageFit: "cover",
        frameless: true
      },
      {
        slug: "predict-air",
        title: "Predict'Air",
        type: language === "fr" ? "Outil data" : "Data tool",
        role: language === "fr" ? "Projet data · Eugenia School" : "Data project · Eugenia School",
        description:
          language === "fr"
            ? "Outil d'estimation de probabilité de retard de vol selon modèle d'avion, compagnie aérienne et météo."
            : "Flight delay probability estimator based on aircraft model, airline, and weather conditions.",
        sections: language === "fr" ? [
          { icon: Lightbulb, title: "Concept", text: "Predict'Air est un outil data qui estime la probabilité de retard d'un vol avant de partir : en croisant le modèle d'avion, la compagnie aérienne et les conditions météo. L'objectif : aider à la décision de voyage." },
          { icon: Settings, title: "Fonctionnement", bullets: ["L'utilisateur sélectionne la compagnie, le modèle d'avion et les conditions météo", "Le modèle SQL croise ces variables avec un historique de vols", "Un score de probabilité de retard est affiché", "Interface web déployée et accessible en ligne"] },
          { icon: Wrench, title: "Stack", bullets: ["SQL : traitement et modélisation des données historiques", "Lovable : frontend et déploiement", "Données historiques de vols (open data)"] },
          { icon: GraduationCap, title: "Ce que j'en ai retiré", bullets: ["Analyse de données SQL appliquée à un cas réel", "Construction d'un pipeline data : collecte → modèle → interface", "UX d'un outil décisionnel simple et lisible", "Travail en équipe avec livrables concrets"] },
        ] : [
          { icon: Lightbulb, title: "Concept", text: "Predict'Air is a data tool that estimates the probability of a flight delay : based on aircraft model, airline, and weather conditions. The goal is to improve pre-trip decision making." },
          { icon: Settings, title: "How it works", bullets: ["User selects the airline, aircraft model, and weather conditions", "SQL model cross-references these variables against historical flight data", "A delay probability score is displayed", "Deployed and accessible web interface"] },
          { icon: Wrench, title: "Stack", bullets: ["SQL : data processing and modeling", "Lovable : frontend and deployment", "Open flight history data"] },
          { icon: GraduationCap, title: "Key takeaways", bullets: ["Applied SQL data analysis on a real use case", "End-to-end data pipeline: collection → model → interface", "Simple and readable decision-tool UX", "Team project with concrete deliverables"] },
        ],
        link: "https://flight-farewell.lovable.app/",
        image: predictAirImage,
        imageFit: "cover",
        frameless: true
      },
      {
        slug: "ufc-ai-fight-prediction",
        title: "UFC AI Fight Prediction",
        type: language === "fr" ? "IA & data" : "AI & data",
        role: language === "fr" ? "Chef de projet" : "Project Lead",
        description:
          language === "fr"
            ? "Scraping, analyse de données et IA appliquée aux combattants UFC pour identifier les facteurs de performance et explorer la prédiction d'issue d'un combat."
            : "UFC fighter data scraping, analytics, and applied AI to identify performance drivers and explore fight outcome prediction.",
        sections: language === "fr" ? [
          { icon: Target, title: "Contexte", text: "Projet d'analyse sportive appliqué à l'UFC. L'idée : partir des données publiques sur les combattants (statistiques, palmarès, morphologie) et explorer si un modèle IA peut prédire l'issue d'un combat." },
          { icon: Search, title: "Approche", bullets: ["Scraping des statistiques de combattants UFC (strikes, takedowns, reach, win streak...)", "Nettoyage et préparation du dataset", "Identification des variables de performance les plus influentes", "Exploration de modèles IA de prédiction d'issue de combat", "Interprétation et visualisation des résultats"] },
          { icon: Wrench, title: "Stack", bullets: ["Python : scraping, nettoyage et traitement des données", "Machine Learning : modélisation prédictive", "V0.app : interface de visualisation des résultats"] },
          { icon: GraduationCap, title: "Ce que j'en ai retiré", bullets: ["Data engineering sur données sportives réelles", "Approche analytique et modélisation IA appliquées", "Interprétation des variables influentes dans un modèle ML", "Gestion de projet data de bout en bout"] },
        ] : [
          { icon: Target, title: "Context", text: "A sports analytics project applied to UFC. The idea: starting from public fighter data (stats, records, morphology) to explore whether an AI model can predict fight outcomes." },
          { icon: Search, title: "Approach", bullets: ["UFC fighter stats scraping (strikes, takedowns, reach, win streak...)", "Dataset cleaning and preparation", "Identifying the most influential performance variables", "Exploring AI models for fight outcome prediction", "Result interpretation and visualization"] },
          { icon: Wrench, title: "Stack", bullets: ["Python : scraping, cleaning, and data processing", "Machine Learning : predictive modeling", "V0.app : results visualization interface"] },
          { icon: GraduationCap, title: "Key takeaways", bullets: ["Data engineering on real-world sports data", "Applied analytics and AI modeling", "ML variable interpretation", "End-to-end data project management"] },
        ],
        link: "https://v0.app/chat/ufc-fighter-data-qGaCdZLhDl7",
        image: ufcLogo,
        imageFit: "cover",
        frameless: true,
        imageClass: "ufcProjectThumb"
      },
      {
        slug: "hackathon-aset",
        title: "ASET",
        type: language === "fr" ? "Hackathon · 🥇 1re place" : "Hackathon · 🥇 1st place",
        role: language === "fr" ? "Chef de projet · Eugenia School" : "Project Lead · Eugenia School",
        description:
          language === "fr"
            ? "Plateforme IA de mise en relation entre seniors isolés et étudiants prestataires pour des services de proximité à domicile."
            : "AI platform connecting isolated seniors and student service providers for local, on-demand home services.",
        sections: language === "fr" ? [
          { icon: Lightbulb, title: "Le concept", bullets: ["Mettre en relation des seniors isolés avec des étudiants locaux vérifiés pour des services à domicile (courses, dépannage, aide quotidienne)", "L'utilisateur décrit son besoin par voix ou texte : l'agent IA comprend, classe et route la demande", "Pour les seniors : bascule automatique en mode vocal : voix douce, interface ultra-simplifiée", "Pour les aidants/famille : dashboard « Mes proches » pour suivre les missions en temps réel"] },
          { icon: Wrench, title: "Stack technique", bullets: ["V0.dev : frontend et chat UI", "n8n : orchestration et logique métier", "Dust AI : agent NLP multi-agents, compréhension langage naturel", "Supabase : base de données (conversations, prestataires)", "Speech-to-text / TTS : interactions vocales"] },
          { icon: Layers, title: "Architecture", bullets: ["[Frontend V0] → message utilisateur → [Webhook n8n]", "[n8n] → HTTP Request → [Dust API /runs]", "[Dust Agent] → analyse & réponse → [n8n Respond to Webhook]", "[V0 Chat] → affiche et vocalise la réponse de l'agent"] },
          { icon: GraduationCap, title: "Ce que j'en ai retiré", bullets: ["Prototyper une solution IA complète en 48h sous contrainte forte", "Maîtrise du workflow n8n → Dust AI → V0", "Architecture multi-agents avec routing intelligent", "Pitch produit structuré devant jury : 🥇 1re place remportée"] },
        ] : [
          { icon: Lightbulb, title: "The concept", bullets: ["Connect isolated seniors with verified local students for home services (groceries, repairs, daily help)", "User describes their need by voice or text: the AI agent understands, classifies and routes the request", "For seniors: automatic switch to voice mode : gentle voice, ultra-simplified interface", "For caregivers/family: 'My relatives' dashboard to track missions in real time"] },
          { icon: Wrench, title: "Tech stack", bullets: ["V0.dev : frontend and chat UI", "n8n : orchestration and business logic", "Dust AI : multi-agent NLP, natural language understanding", "Supabase : database (conversations, providers)", "Speech-to-text / TTS : voice interactions"] },
          { icon: Layers, title: "Architecture", bullets: ["[V0 Frontend] → user message → [n8n Webhook]", "[n8n] → HTTP Request → [Dust API /runs]", "[Dust Agent] → analysis & response → [n8n Respond to Webhook]", "[V0 Chat] → displays and vocalizes the agent's response"] },
          { icon: GraduationCap, title: "Key takeaways", bullets: ["Prototyping a full AI solution in 48h under pressure", "n8n → Dust AI → V0 workflow mastery", "Multi-agent architecture with intelligent routing", "Structured product pitch to jury : 🥇 1st place"] },
        ],
        link: hackathonCertificate,
        image: hackathonIcon,
        imageFit: "contain",
        frameless: true
      },
      {
        slug: "hackathon-payfit",
        title: "SEO IA × PayFit",
        type: language === "fr" ? "Hackathon · 🥈 2e place" : "Hackathon · 🥈 2nd place",
        role: language === "fr" ? "Chef de projet · Eugenia School × Paatch" : "Project Lead · Eugenia School × Paatch",
        description:
          language === "fr"
            ? "Automatiser la stratégie SEO de PayFit par l'IA : génération de contenu à grande échelle, détection de tendances RH/paie émergentes et outils no-code."
            : "Automating PayFit's SEO strategy with AI: large-scale content generation, detection of emerging HR/payroll trends, and no-code tooling.",
        sections: language === "fr" ? [
          { icon: Target, title: "Problématiques posées par PayFit", bullets: ["Comment générer du contenu SEO en masse par l'IA tout en maintenant un niveau de qualité suffisant ?", "Comment détecter les tendances RH/paie émergentes et créer du contenu avant la concurrence ?", "Comment les outils no-code peuvent soutenir une stratégie SEO en 2026 pour un SaaS ?"] },
          { icon: Package, title: "Livrables remis en 4 jours", bullets: ["Stratégie de keyword research ciblée (mots-clés prioritaires PayFit + calculateurs/simulateurs)", "Article SEO complet (~1 000 mots) généré par IA, avec prompt documenté et grille de conformité légale", "Prototype fonctionnel sur Lovable : simulateur interactif, URL partageable, interface cliquable", "Workflow n8n/Make automatisant : détection de tendances → génération de briefs de contenu"] },
          { icon: Scale, title: "Critères d'évaluation du jury", bullets: ["Impact & pertinence business", "Excellence technique", "Viabilité & scalabilité", "Qualité du pitch (6 min + 5 min Q&A)"] },
          { icon: Wrench, title: "Outils utilisés", bullets: ["Lovable : prototype d'outil interactif SEO (no-code)", "n8n / Make : automatisation des workflows", "LLM : génération et optimisation de contenu", "SEMrush : recherche de mots-clés"] },
          { icon: GraduationCap, title: "Ce que j'en ai retiré", bullets: ["SEO augmenté par l'IA : industrialisation de la production de contenu", "Maîtrise des outils no-code dans un contexte business réel", "Gestion de livrables multiples sur 4 jours sous contrainte", "Pitch structuré 6 min devant jury professionnel : 🥈 2e place"] },
        ] : [
          { icon: Target, title: "PayFit's challenges", bullets: ["How to generate SEO content at scale with AI while maintaining sufficient quality?", "How to detect emerging HR/payroll trends and create content before competitors?", "How can no-code tools support a 2026 SEO strategy for a SaaS player?"] },
          { icon: Package, title: "Deliverables in 4 days", bullets: ["Targeted keyword research strategy (PayFit priority keywords + calculators/simulators)", "Full AI-generated SEO article (~1,000 words) with documented prompt and legal compliance checklist", "Working Lovable prototype : interactive simulator, shareable URL, clickable interface", "n8n/Make workflow: trend detection → content brief generation"] },
          { icon: Scale, title: "Jury evaluation criteria", bullets: ["Business impact & relevance", "Technical excellence", "Viability & scalability", "Pitch quality (6 min + 5 min Q&A)"] },
          { icon: Wrench, title: "Tools used", bullets: ["Lovable : interactive SEO tool prototype (no-code)", "n8n / Make : workflow automation", "LLM : content generation and optimization", "SEMrush : keyword research"] },
          { icon: GraduationCap, title: "Key takeaways", bullets: ["AI-augmented SEO: industrialized content production", "No-code tool mastery in a real business context", "Managing multiple deliverables over 4 days under pressure", "6-min structured pitch to a professional jury : 🥈 2nd place"] },
        ],
        link: hackathonPayfitPdf,
        image: hackathonIcon,
        imageFit: "contain",
        frameless: true
      }
    ],
    [language]
  );
  return (
    <div className={`app ${theme === "light" ? "themeLight" : "themeDark"}`}>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              language={language}
              theme={theme}
              setLanguage={setLanguage}
              t={t}
              projects={projects}
            />
          }
        />
        <Route
          path="/projects/:slug"
          element={<ProjectDetailPage projects={projects} language={language} />}
        />
      </Routes>
    </div>
  );
}
