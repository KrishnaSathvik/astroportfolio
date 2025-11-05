import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaInstagram, FaUnsplash } from 'react-icons/fa'
import { Si500Px, SiPexels } from 'react-icons/si'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // EmailJS configuration
    // You'll need to replace these with your actual EmailJS credentials
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'astrobykrishna@gmail.com',
        },
        publicKey
      )

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex-1 w-full px-4 pb-12 sm:px-6 py-20">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="title-animate text-center mb-16">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-zinc-900 tracking-tight mb-6 font-geist font-semibold">
            Get in Touch
          </h1>
          <p className="text-xl text-zinc-600 font-geist max-w-2xl mx-auto">
            I'm always happy to connect—about limited edition prints, gallery opportunities, media features, or creative collaborations. If you have a specific photograph or size in mind, include the title and preferred dimensions so I can respond quickly.
          </p>
          <div className="w-24 h-1 bg-zinc-900 mx-auto mt-6"></div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-zinc-200 mb-12">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6 font-geist">Contact Form</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-900 mb-2 font-geist">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all font-geist"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-900 mb-2 font-geist">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all font-geist"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-zinc-900 mb-2 font-geist">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all font-geist bg-white"
              >
                <option value="">Select a subject</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Press/Media">Press/Media</option>
                <option value="Licensing">Licensing</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-900 mb-2 font-geist">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none transition-all font-geist resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-zinc-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-zinc-800 transition-colors duration-200 font-geist disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-geist text-sm">
                  ✓ Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-geist text-sm">
                  ✗ There was an error sending your message. Please try again or email directly at astrobykrishna@gmail.com
                </p>
              </div>
            )}
          </form>
        </div>

        {/* Follow Me */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-zinc-200 mb-8">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6 font-geist">Follow Me</h2>
          <div className="space-y-4 font-geist">
            <div className="flex items-center">
              <FaInstagram className="text-2xl mr-3 text-zinc-600" />
              <div>
                <p className="text-sm text-zinc-500 mb-1">Instagram</p>
                <a
                  href="https://www.instagram.com/astrobykrishna/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 hover:text-zinc-600 transition-colors font-medium"
                >
                  @astrobykrishna
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <Si500Px className="text-2xl mr-3 text-zinc-600" />
              <div>
                <p className="text-sm text-zinc-500 mb-1">500px</p>
                <a
                  href="https://500px.com/p/astrobykrishna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 hover:text-zinc-600 transition-colors font-medium"
                >
                  astrobykrishna
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <FaUnsplash className="text-2xl mr-3 text-zinc-600" />
              <div>
                <p className="text-sm text-zinc-500 mb-1">Unsplash</p>
                <a
                  href="https://unsplash.com/@astrobykrishna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 hover:text-zinc-600 transition-colors font-medium"
                >
                  @astrobykrishna
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <SiPexels className="text-2xl mr-3 text-zinc-600" />
              <div>
                <p className="text-sm text-zinc-500 mb-1">Pexels</p>
                <a
                  href="https://www.pexels.com/@astrobykrishna/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 hover:text-zinc-600 transition-colors font-medium"
                >
                  @astrobykrishna
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy */}
        <div className="bg-zinc-900 rounded-3xl p-8 shadow-2xl border border-zinc-800">
          <h3 className="text-2xl font-semibold text-white mb-4 font-geist">Privacy</h3>
          <p className="text-zinc-400 leading-relaxed font-geist">
            Your information is used only to respond to your inquiry. No spam—ever.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Contact

