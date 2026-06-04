import { ArrowRight } from 'lucide-react'
import "../../css/ServiceCTC.css"
import { BsWhatsapp } from 'react-icons/bs'

function ServiceCTC() {
  return (
    <section className="sp-cta">
      <div className="sp-cta-bg-grid" aria-hidden="true" />
      <div className="sp-cta-blob" aria-hidden="true" />
      <div className="sp-container sp-container--narrow sp-cta-inner">
        <span className="sp-badge sp-badge--cta">
          <span className="sp-badge-dot" />
          Free First Session
        </span>
        <h2>Ready to Accelerate Your Career?</h2>
        <p>
          Connect with our experts today and get personalised guidance
          for your professional growth.
        </p>
        <div className="sp-cta-actions">
          <button className="sp-btn-primary sp-btn-primary--lg">
            Schedule Free Consultation <ArrowRight size={16} />
          </button>
          <a href="https://wa.me/917382727507" className="sp-btn-wa" target="_blank" rel="noopener noreferrer">
            <BsWhatsapp />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServiceCTC