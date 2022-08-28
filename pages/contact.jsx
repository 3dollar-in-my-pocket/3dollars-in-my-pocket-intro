import ContactForm from '../components/ContactForm/ContactForm'
import Footer from '../components/Footer/Footer'
import PageTitle from '../components/public/PageTitle'

const Contact = () => {
  return (
    <div className="page">
      <PageTitle name="Contact info" />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact
