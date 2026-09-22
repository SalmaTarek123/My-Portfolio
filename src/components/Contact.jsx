// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import './components.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: 'easeOut' },
//     },
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // For now, just show success message
//     // Later: integrate with EmailJS or Formspree
//     console.log('Form submitted:', formData);
//     setSubmitted(true);

//     // Reset form after 2 seconds
//     setTimeout(() => {
//       setFormData({ name: '', email: '', message: '' });
//       setSubmitted(false);
//     }, 2000);
//   };

//   return (
//     <div className="contact-section">
//       <div className="container">
//         <motion.div
//           className="section-header"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2>Get In Touch</h2>
//           <p>Have a project in mind? Let's chat! I'll get back to you as soon as possible.</p>
//         </motion.div>

//         <motion.div
//           className="contact-content"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           {/* Contact Info */}
//           <motion.div className="contact-info" variants={itemVariants}>
//             <h3>Let's Connect</h3>
//             <p>Find all the ways to reach me below:</p>

//             <div className="contact-links">
//               <a
//                 href="mailto:your@email.com"
//                 className="contact-link"
//               >
//                 <span className="link-icon">✉</span>
//                 <div>
//                   <strong>Email</strong>
//                   <p>your@email.com</p>
//                 </div>
//               </a>

//               <a
//                 href="https://linkedin.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="contact-link"
//               >
//                 <span className="link-icon">in</span>
//                 <div>
//                   <strong>LinkedIn</strong>
//                   <p>your-profile</p>
//                 </div>
//               </a>

//               <a
//                 href="https://github.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="contact-link"
//               >
//                 <span className="link-icon">⚙</span>
//                 <div>
//                   <strong>GitHub</strong>
//                   <p>your-username</p>
//                 </div>
//               </a>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.form
//             className="contact-form"
//             variants={itemVariants}
//             onSubmit={handleSubmit}
//           >
//             <h3>Send me a message</h3>

//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Your name"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="your@email.com"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="message">Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Write your message here..."
//                 rows="5"
//                 required
//               ></textarea>
//             </div>

//             {submitted ? (
//               <motion.div
//                 className="success-message"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//               >
//                 ✓ Thanks! I'll be in touch soon.
//               </motion.div>
//             ) : (
//               <motion.button
//                 type="submit"
//                 className="btn btn-primary"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Send Message
//               </motion.button>
//             )}
//           </motion.form>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Contact;















// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import './components.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: 'easeOut' },
//     },
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // For now, just show success message
//     // Later: integrate with EmailJS or Formspree
//     console.log('Form submitted:', formData);
//     setSubmitted(true);

//     // Reset form after 2 seconds
//     setTimeout(() => {
//       setFormData({ name: '', email: '', message: '' });
//       setSubmitted(false);
//     }, 2000);
//   };

//   return (
//     <div className="contact-section">
//       <div className="container">
//         <motion.div
//           className="section-header"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2>Get In Touch</h2>
//           <p>Have a project in mind? Let's chat! I'll get back to you as soon as possible.</p>
//         </motion.div>

//         <motion.div
//           className="contact-content"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           {/* Contact Info */}
//           <motion.div className="contact-info" variants={itemVariants}>
//             <h3>Let's Connect</h3>
//             <p>Find all the ways to reach me below:</p>

//             <div className="contact-links">
//               <a
//                 href="mailto:salmatatek8@gmail.com"
//                 className="contact-link"
//               >
//                 <span className="link-icon">✉</span>
//                 <div>
//                   <strong>Email</strong>
//                   <p>salmatatek8@gmail.com</p>
//                 </div>
//               </a>

//               <a
//                 href="https://www.linkedin.com/in/salma-tarek-74087a30b"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="contact-link"
//               >
//                 <span className="link-icon">in</span>
//                 <div>
//                   <strong>LinkedIn</strong>
//                   <p>salma-tarek-74087a30b</p>
//                 </div>
//               </a>

//               <a
//                 href="https://github.com/SalmaTarek123"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="contact-link"
//               >
//                 <span className="link-icon">⚙</span>
//                 <div>
//                   <strong>GitHub</strong>
//                   <p>SalmaTarek123</p>
//                 </div>
//               </a>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.form
//             className="contact-form"
//             variants={itemVariants}
//             onSubmit={handleSubmit}
//           >
//             <h3>Send me a message</h3>

//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Your name"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="your@email.com"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="message">Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Write your message here..."
//                 rows="5"
//                 required
//               ></textarea>
//             </div>

//             {submitted ? (
//               <motion.div
//                 className="success-message"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//               >
//                 ✓ Thanks! I'll be in touch soon.
//               </motion.div>
//             ) : (
//               <motion.button
//                 type="submit"
//                 className="btn btn-primary"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Send Message
//               </motion.button>
//             )}
//           </motion.form>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
















import { motion } from 'framer-motion';
import { useState } from 'react';
import './components.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // الفورم مالوش سيرفر ورا، فبنفتح تطبيق إيميل الزائر برسالة جاهزة
    // موجّهة لإيميلك، وهو بس يدوس "إرسال" من عنده
    const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:salmatatek8@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);

    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="contact-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Get In Touch</h2>
          <p>Have a project in mind? Let's chat! I'll get back to you as soon as possible.</p>
        </motion.div>

        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Info */}
          <motion.div className="contact-info" variants={itemVariants}>
            <h3>Let's Connect</h3>
            <p>Find all the ways to reach me below:</p>

            <div className="contact-links">
              <a
                href="mailto:salmatatek8@gmail.com"
                className="contact-link"
              >
                <span className="link-icon">✉</span>
                <div>
                  <strong>Email</strong>
                  <p>salmatatek8@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/salma-tarek-74087a30b"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="link-icon">in</span>
                <div>
                  <strong>LinkedIn</strong>
                  <p>salma-tarek-74087a30b</p>
                </div>
              </a>

              <a
                href="https://wa.me/201210921757"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="link-icon">💬</span>
                <div>
                  <strong>WhatsApp</strong>
                  <p>Message me directly</p>
                </div>
              </a>

              <a
                href="https://github.com/SalmaTarek123"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="link-icon">⚙</span>
                <div>
                  <strong>GitHub</strong>
                  <p>SalmaTarek123</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="contact-form"
            variants={itemVariants}
            onSubmit={handleSubmit}
          >
            <h3>Send me a message</h3>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="5"
                required
              ></textarea>
            </div>

            {submitted ? (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                ✓ Opening your email app — hit send there to reach me!
              </motion.div>
            ) : (
              <motion.button
                type="submit"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            )}
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;