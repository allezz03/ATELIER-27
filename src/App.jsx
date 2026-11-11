import { useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Instagram, MoveUpRight, Plus } from 'lucide-react'
import { projects } from './data/projects'
import { supabase } from './lib/supabase'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const close = () => setOpen(false)
  return (
    <header className="header">
      <Link to="/" className="brand" onClick={close} aria-label="ATELIER 27 homepage">
        <span className="brand-mark">A<span>27</span></span>
        <span className="brand-name">ATELIER<br/>TWENTY SEVEN</span>
      </Link>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Chiudi menu' : 'Apri menu'}>
        {open ? <X size={22}/> : <Menu size={22}/>}
      </button>
      <nav className={`nav ${open ? 'nav-open' : ''}`}>
        <NavLink to="/studio" onClick={close} className={({isActive}) => isActive ? 'active' : ''}>Studio</NavLink>
        <NavLink to="/progetti" onClick={close} className={({isActive}) => isActive ? 'active' : ''}>Progetti</NavLink>
        <NavLink to="/servizi" onClick={close} className={({isActive}) => isActive ? 'active' : ''}>Servizi</NavLink>
        <Link to="/contatti" className="nav-contact" onClick={close}>Parliamone <ArrowUpRight size={15}/></Link>
      </nav>
      <span className="header-index">INTERIOR DESIGN STUDIO — ITALY</span>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <span className="eyebrow light">HAI UN PROGETTO IN MENTE?</span>
          <h2>Facciamolo<br/><em>prendere forma.</em></h2>
        </div>
        <Link to="/contatti" className="footer-cta">Raccontaci la tua idea <ArrowUpRight/></Link>
      </div>
      <div className="footer-bottom">
        <Link to="/" className="footer-logo">ATELIER 27<span>®</span></Link>
        <span>Studio indipendente di interior design</span>
        <div className="footer-links"><Link to="/progetti">Progetti</Link><Link to="/studio">Studio</Link><Link to="/contatti">Contatti</Link></div>
        <span>© 2025 ATELIER 27</span>
      </div>
    </footer>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.article className={`project-card project-card-${index + 1}`} variants={fadeUp}>
      <Link to={`/progetti/${project.id}`} className="project-image-wrap">
        <img src={project.image} alt={`Progetto ${project.title}`} loading="lazy"/>
        <span className="project-arrow"><ArrowUpRight/></span>
      </Link>
      <div className="project-meta"><span>{project.number} / {project.type}</span><span>{project.year}</span></div>
      <Link to={`/progetti/${project.id}`} className="project-title">{project.title}</Link>
      <span className="project-location">{project.location}</span>
    </motion.article>
  )
}

function Home() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-topline"><span>SPAZI CHE RACCONTANO</span><span>BOLOGNA · OVUNQUE</span></div>
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={fadeUp}>
            <p className="eyebrow">INTERIOR DESIGN / ARCHITETTURA / DIREZIONE CREATIVA</p>
            <h1>Il bello è<br/>sentirsi <em>a casa.</em></h1>
            <div className="hero-bottom">
              <p>Progettiamo ambienti autentici, dove estetica e quotidianità trovano il loro punto d’incontro.</p>
              <Link to="/progetti" className="round-link" aria-label="Scopri i progetti"><ArrowDownRight/></Link>
            </div>
          </motion.div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=90" alt="Interno contemporaneo con arredi di design"/>
            <span className="image-caption">01 — SPAZI DA VIVERE, NON SOLO DA GUARDARE</span>
          </div>
          <div className="hero-stamp"><span>DESIGN<br/>WITH<br/>FEELING</span><span className="stamp-star">✳</span></div>
        </section>

        <section className="intro section-pad">
          <div className="section-label"><span>01 / CHI SIAMO</span><span>UN APPROCCIO PERSONALE</span></div>
          <div className="intro-grid">
            <h2>Ogni spazio<br/>ha una <em>storia.</em></h2>
            <div className="intro-text"><p>Crediamo che un progetto riuscito nasca dall’ascolto. Dalle abitudini, dai desideri e dalle piccole cose che rendono unico chi abita uno spazio.</p><p>Li trasformiamo in ambienti funzionali, riconoscibili e pieni di carattere.</p><Link to="/studio" className="text-link">Conosci lo studio <ArrowUpRight size={17}/></Link></div>
          </div>
          <div className="intro-scribble">spazi<br/>con<br/>anima<span>✳</span></div>
        </section>

        <section className="featured section-pad">
          <div className="section-label"><span>02 / SELEZIONE</span><span>PROGETTI RECENTI</span></div>
          <div className="section-heading"><h2>Idee diventate<br/><em>luoghi.</em></h2><Link to="/progetti" className="text-link">Tutti i progetti <ArrowUpRight size={17}/></Link></div>
          <motion.div className="projects-grid" initial="hidden" whileInView="visible" viewport={{once:true, amount:.12}} variants={{visible:{transition:{staggerChildren:.12}}}}>
            {projects.slice(0,3).map((project, index) => <ProjectCard key={project.id} project={project} index={index}/>)}
          </motion.div>
        </section>

        <section className="manifesto">
          <div className="manifesto-shape">✳</div>
          <span className="eyebrow">IL NOSTRO MANIFESTO</span>
          <h2>Non seguiamo<br/>uno stile. <em>Creiamo</em><br/><em>il tuo.</em></h2>
          <p>Ascolto, ricerca e cura del dettaglio: ogni progetto è un percorso condiviso, mai una formula da replicare.</p>
          <Link to="/studio" className="manifesto-link">Il nostro approccio <ArrowUpRight/></Link>
        </section>

        <section className="services-preview section-pad">
          <div className="section-label"><span>03 / COSA FACCIAMO</span><span>DALL’IDEA ALLA REALTÀ</span></div>
          <div className="services-row"><h2>Progettiamo<br/><em>possibilità.</em></h2><div className="service-list"><div><span>01</span><b>Interior design</b><ArrowUpRight/></div><div><span>02</span><b>Progettazione su misura</b><ArrowUpRight/></div><div><span>03</span><b>Consulenza e styling</b><ArrowUpRight/></div><Link to="/servizi" className="text-link">Scopri i servizi <ArrowRight size={17}/></Link></div></div>
        </section>
      </main>
    </>
  )
}

function PageIntro({ number, kicker, title, italic, description }) {
  return <section className="page-intro section-pad"><div className="section-label"><span>{number} / {kicker}</span><span>ATELIER 27 — INTERIOR DESIGN</span></div><h1>{title}<br/><em>{italic}</em></h1>{description && <p>{description}</p>}</section>
}

function Studio() {
  return <main><PageIntro number="01" kicker="LO STUDIO" title="Spazi pensati" italic="per le persone." description="Siamo uno studio indipendente che unisce sensibilità estetica, visione progettuale e attenzione per il modo in cui viviamo gli ambienti."/>
    <div className="wide-photo"><img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=85" alt="Living contemporaneo"/></div>
    <section className="studio-content section-pad"><div className="section-label"><span>IL NOSTRO METODO</span><span>ASCOLTARE · IMMAGINARE · REALIZZARE</span></div><div className="studio-columns"><h2>Il progetto<br/>parte da <em>te.</em></h2><div><p>Prima delle planimetrie ci sono le persone. Per questo ogni collaborazione comincia con una conversazione: vogliamo capire come vivi, cosa ti serve e quale atmosfera vuoi ritrovare ogni giorno.</p><p>Da lì costruiamo un percorso chiaro, fatto di ricerca, materiali, palette, disegni e scelte condivise. Seguiamo ogni dettaglio con curiosità e concretezza.</p><div className="values"><div><strong>01</strong><b>Ascolto</b><span>Capire prima di progettare.</span></div><div><strong>02</strong><b>Ricerca</b><span>Esplorare nuove possibilità.</span></div><div><strong>03</strong><b>Cura</b><span>Dare valore a ogni dettaglio.</span></div></div></div></div></section>
    <section className="stats-band"><div><strong>40<span>+</span></strong><span>PROGETTI SEGUITI</span></div><div><strong>8</strong><span>ANNI DI ESPERIENZA</span></div><div><strong>3</strong><span>REGIONI ATTIVE</span></div><div><strong>100<span>%</span></strong><span>PROGETTI SU MISURA</span></div></section>
  </main>
}

function Projects() {
  const [filter, setFilter] = useState('Tutti')
  const filtered = filter === 'Tutti' ? projects : projects.filter(p => p.category === filter)
  return <main><PageIntro number="02" kicker="PORTFOLIO" title="Una selezione" italic="di storie." description="Ogni progetto nasce da un’esigenza diversa. Il risultato è sempre uno spazio con una propria identità."/>
    <section className="portfolio section-pad"><div className="filters">{['Tutti','Residenziale','Commerciale'].map(item => <button key={item} onClick={() => setFilter(item)} className={filter === item ? 'filter-active' : ''}>{item}</button>)}</div><motion.div className="projects-grid portfolio-grid" layout>{filtered.map((project,index)=><ProjectCard key={project.id} project={project} index={index}/>)}</motion.div></section>
  </main>
}

function ProjectDetail() {
  const location = useLocation()
  const id = location.pathname.split('/').pop()
  const project = projects.find(p => p.id === id)
  if (!project) return <main className="not-found"><h1>Progetto non trovato.</h1><Link to="/progetti" className="text-link">Torna ai progetti <ArrowRight/></Link></main>
  return <main><section className="detail-hero section-pad"><Link to="/progetti" className="back-link">← Tutti i progetti</Link><div className="detail-heading"><span className="eyebrow">{project.number} / {project.type}</span><h1>{project.title}<em>.</em></h1><p>{project.location} · {project.year}</p></div></section><div className="detail-image"><img src={project.image} alt={project.title}/></div><section className="detail-description section-pad"><span className="eyebrow">IL CONCEPT</span><h2>Un luogo che<br/><em>parla di sé.</em></h2><p>{project.description}</p><Link to="/contatti" className="text-link">Hai un progetto simile? Parliamone <ArrowUpRight/></Link></section></main>
}

const serviceItems = [
  ['01','Interior design','Progettiamo ambienti residenziali e commerciali, definendo layout, materiali, colori e atmosfera.'],
  ['02','Progettazione su misura','Disegniamo arredi e soluzioni personalizzate per valorizzare ogni centimetro e ogni esigenza.'],
  ['03','Consulenza e styling','Ti aiutiamo a dare una nuova direzione ai tuoi spazi, anche attraverso interventi mirati e mirati.'],
  ['04','Direzione creativa','Coordiniamo il linguaggio visivo del progetto, dalla prima ispirazione alla selezione dei dettagli.'],
]

function Services() {
  return <main><PageIntro number="03" kicker="SERVIZI" title="Diamo forma" italic="alle idee." description="Un percorso flessibile, costruito intorno alle tue esigenze. Possiamo accompagnarti in ogni fase o intervenire dove serve."/><section className="service-page section-pad">{serviceItems.map(([n,title,desc])=><article className="service-item" key={n}><span>{n}</span><h2>{title}</h2><p>{desc}</p><Plus/></article>)}</section><section className="service-note"><span className="eyebrow">IL PRIMO PASSO</span><h2>Parliamone<br/><em>senza impegno.</em></h2><Link to="/contatti" className="text-link">Contattaci <ArrowUpRight/></Link></section></main>
}

function Contact() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name:'', email:'', project:'', message:'' })
  const update = e => setForm({...form, [e.target.name]: e.target.value})
  async function submit(e) {
    e.preventDefault()
    setStatus('loading')
    try {
      if (supabase) {
        const { error } = await supabase.from('contact_requests').insert([form])
        if (error) throw error
      } else {
        await new Promise(resolve => setTimeout(resolve, 650))
        console.info('Richiesta demo ATELIER 27:', form)
      }
      setStatus('success')
      setForm({name:'',email:'',project:'',message:''})
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }
  return <main><PageIntro number="04" kicker="CONTATTI" title="Cominciamo" italic="da un’idea." description="Raccontaci cosa hai in mente. Ci piace ascoltare nuove storie e immaginare insieme quello che ancora non esiste."/>
    <section className="contact-layout section-pad"><div className="contact-info"><span className="eyebrow">DOVE TROVARCI</span><h2>Un caffè,<br/><em>un progetto.</em></h2><p>Riceviamo su appuntamento e lavoriamo in tutta Italia.</p><a href="mailto:ciao@atelier27.example">ciao@atelier27.example <ArrowUpRight size={16}/></a><span className="contact-small">INSTAGRAM · @ATELIER27_STUDIO</span></div>
      <form className="contact-form" onSubmit={submit}><label>IL TUO NOME<input name="name" value={form.name} onChange={update} required placeholder="Come ti chiami?"/></label><label>EMAIL<input type="email" name="email" value={form.email} onChange={update} required placeholder="La tua email"/></label><label>TIPO DI PROGETTO<select name="project" value={form.project} onChange={update} required><option value="">Seleziona un’opzione</option><option>Casa / Appartamento</option><option>Spazio commerciale</option><option>Consulenza</option><option>Altro</option></select></label><label>RACCONTACI LA TUA IDEA<textarea name="message" value={form.message} onChange={update} required rows="4" placeholder="Qualche dettaglio sul tuo progetto..."/></label><button className="submit-button" disabled={status==='loading'}>{status==='loading'?'Invio in corso...':'Invia la richiesta'} <ArrowUpRight/></button>
      {status==='success' && <p className="form-success">Grazie! La tua richiesta è stata registrata.</p>}
      {status==='error' && <p className="form-error">Non è stato possibile inviare la richiesta. Riprova oppure scrivici via email.</p>}
      {!supabase && <p className="form-hint">Modalità anteprima: il form simula l’invio. Collega Supabase per salvare le richieste.</p>}
      </form>
    </section>
  </main>
}

function NotFound() { return <main className="not-found"><span className="eyebrow">404</span><h1>Questa pagina<br/><em>non esiste.</em></h1><Link to="/" className="text-link">Torna alla home <ArrowRight/></Link></main> }

export default function App() {
  const location = useLocation()
  return <><Header/><AnimatePresence mode="wait"><motion.div key={location.pathname} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.2}}><Routes><Route path="/" element={<Home/>}/><Route path="/studio" element={<Studio/>}/><Route path="/progetti" element={<Projects/>}/><Route path="/progetti/:id" element={<ProjectDetail/>}/><Route path="/servizi" element={<Services/>}/><Route path="/contatti" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes><Footer/></motion.div></AnimatePresence></>
}
