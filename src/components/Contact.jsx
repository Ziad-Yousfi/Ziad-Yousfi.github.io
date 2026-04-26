import { useState } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { useLanguage } from '../context/LanguageContext'

const Contact = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: '', message: '' })

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey || 
        serviceId === 'YOUR_SERVICE_ID' || 
        templateId === 'YOUR_TEMPLATE_ID' || 
        publicKey === 'YOUR_PUBLIC_KEY') {
      const subject = encodeURIComponent(`Message de ${formData.name}`)
      const body = encodeURIComponent(
        `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )
      window.location.href = `mailto:yousfiziadpro@gmail.com?subject=${subject}&body=${body}`
      
      setSubmitStatus({
        type: 'success',
        message: t('contact.fallback')
      })
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
      return
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'yousfiziadpro@gmail.com',
        },
        publicKey
      )

      setSubmitStatus({
        type: 'success',
        message: t('contact.success')
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      const subject = encodeURIComponent(`Message de ${formData.name}`)
      const body = encodeURIComponent(
        `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )
      
      setSubmitStatus({
        type: 'error',
        message: t('contact.error'),
        mailtoLink: `mailto:yousfiziadpro@gmail.com?subject=${subject}&body=${body}`
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding min-h-screen flex items-center">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
          {t('contact.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">
                {t('contact.stayInTouch')}
              </h3>
              <p className="text-white/90 leading-relaxed mb-8">
                {t('contact.description')}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-dark-gray/50 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300">
                <FaMapMarkerAlt className="text-white text-2xl" />
                <div>
                  <p className="text-white/70 text-sm">{t('contact.location')}</p>
                  <p className="text-white">{t('about.location')}</p>
                </div>
              </div>

              <a
                href="mailto:yousfiziadpro@gmail.com"
                className="flex items-center space-x-4 p-4 bg-dark-gray/50 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <FaEnvelope className="text-white text-2xl" />
                <div>
                  <p className="text-white/70 text-sm">{t('contact.email')}</p>
                  <p className="text-white">yousfiziadpro@gmail.com</p>
                </div>
              </a>

              <div className="flex space-x-6 pt-4">
                <a
                  href="https://www.linkedin.com/in/ziadyousfi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-white/70 hover:text-white transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/Ziad-Yousfi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-white/70 hover:text-white transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-dark-gray/50 p-8 rounded-lg border border-white/10">
            <h3 className="text-2xl font-semibold mb-6 text-white">
              {t('contact.sendMessage')}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/90 mb-2">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/50 transition-colors"
                  placeholder={t('contact.placeholderName')}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white/90 mb-2">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/50 transition-colors"
                  placeholder={t('contact.placeholderEmail')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/90 mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-dark-bg border border-white/20 rounded-lg text-white focus:outline-none focus:border-white/50 transition-colors resize-none"
                  placeholder={t('contact.placeholderMessage')}
                />
              </div>

              {submitStatus.message && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === 'success'
                      ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                      : 'bg-red-500/20 border border-red-500/50 text-red-400'
                  }`}
                >
                  {submitStatus.message}
                  {submitStatus.mailtoLink && (
                    <a
                      href={submitStatus.mailtoLink}
                      className="block mt-2 text-white underline hover:text-white/80"
                    >
                      {t('contact.sendEmailNow')}
                    </a>
                  )}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-white text-dark-bg font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t('contact.sending') : t('contact.sendButton')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
