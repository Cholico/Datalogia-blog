import { useState } from "react";
import { motion } from "framer-motion";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    try{
      const response = await fetch("https://backend-datalogia.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if(response.ok){
        const data = await response.json();
        console.log(data);
        setSubmitted(true);
      }
    } catch (error) {
      alert ("Error de red o de servidor");
      console.log(error);
    }
  };


  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
        <section className="min-h-screen max-w-3xl mx-auto p-6 py-12 space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Contáctame</h1>
        <p className="text-gray-600 dark:text-gray-300">
            ¿Tienes alguna duda, sugerencia o propuesta? Llena el siguiente formulario o mándame un correo directo.
        </p>

        {submitted ? (
            <p className="text-green-500 font-medium">¡Gracias por tu mensaje! Te responderé pronto.</p>
        ) : (
            <form onSubmit={ handleSubmit} className="space-y-4">
              <div>
                  <label className="block mb-1 text-gray-700 dark:text-gray-300">Nombre</label>
                  <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md border dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="Tu nombre"
                  />
              </div>

              <div>
                  <label className="block mb-1 text-gray-700 dark:text-gray-300">Correo electrónico</label>
                  <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Tu correo"
                  required
                  className="w-full p-3 rounded-md border dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
              </div>

              <div>
                  <label className="block mb-1 text-gray-700 dark:text-gray-300">Mensaje</label>
                  <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Mensaje, sugerencia lo que justes..."
                  rows={5}
                  className="w-full p-3 rounded-md border dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
              </div>

              <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition"
              >
                  Enviar mensaje
              </button>
            </form>
        )}
        </section>
    </motion.div>
  );
}

export default ContactPage;
