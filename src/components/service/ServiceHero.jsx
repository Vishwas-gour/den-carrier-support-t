import { ArrowRight, Clock, Phone, ShieldCheck, Zap } from 'lucide-react'
import { SERVICES_PAGE_DATA } from '../../data/ServiceData';
import { useParams } from 'react-router-dom';
import "../../css/ServiceHero.css"

function ServiceHero() {

    const { slug } = useParams();
    const service = SERVICES_PAGE_DATA.find((item) => item.slug === slug);
    return (
        <section className="sp-hero">
            <div className="sp-hero-bg-grid" aria-hidden="true" />
            <div className="sp-hero-blob sp-hero-blob--a" aria-hidden="true" />
            <div className="sp-hero-blob sp-hero-blob--b" aria-hidden="true" />

            <div className="sp-container">
                <div className="sp-hero-inner">
                    <div className="sp-hero-left">
                        {service.badge && (
                            <span className="sp-badge">
                                <span className="sp-badge-dot" />
                                {service.badge}
                            </span>
                        )}

                        <h1 className="sp-hero-title">{service.title}</h1>
                        <p className="sp-hero-desc">{service.description}</p>

                        <div className="sp-hero-trust">
                            <span><ShieldCheck size={13} /> Fully Confidential</span>
                            <span><Clock size={13} /> Flexible Timing</span>
                            <span><Zap size={13} /> Real-Time Support</span>
                        </div>

                        <div className="sp-hero-actions">
                            <button className="sp-btn-primary">
                                Book Free Consultation <ArrowRight size={15} />
                            </button>
                            <button className="sp-btn-secondary">
                                <Phone size={14} /> Contact Expert
                            </button>
                        </div>
                    </div>

                    <div className="sp-hero-right">
                        <div className="sp-stat-card">
                            <div className="sp-stat-card-top" />
                            <div className="sp-stat-row">
                                <div className="sp-stat"><h3>500+</h3><p>Guided</p></div>
                                <div className="sp-stat-divider" />
                                <div className="sp-stat"><h3>95%</h3><p>Satisfaction</p></div>
                                <div className="sp-stat-divider" />
                                <div className="sp-stat"><h3>Free</h3><p>Demo Session</p></div>
                            </div>
                            <p className="sp-stat-sub">Join professionals already growing their careers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceHero