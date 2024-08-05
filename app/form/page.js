"use client";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { storage } from "../../firebaseConfig"; // Assurez-vous d'importer votre configuration Firebase pour le stockage
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function FormPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [thoughts, setThoughts] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null); // État pour l'image
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      console.log("Le format de l'email est invalide");
      return;
    }

    setIsLoading(true);

    try {
      // Téléverser l'image si elle existe
      let imageUrl = "";
      if (image) {
        const imageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef); // Récupérer l'URL de l'image
      }

      const Users = collection(db, "formResponses");
      const response = await addDoc(Users, {
        formFirstName: firstName,
        formLastName: lastName,
        formThoughts: thoughts,
        formEmail: email,
        postDate: new Date().toISOString(), // Ajouter la date de création
        imageUrl: imageUrl // Ajouter l'URL de l'image au document
      });
      console.log("Données envoyées :", response);
      alert("Données envoyées avec succès!");
    } catch (error) {
      console.error("Erreur lors de l'envoi des données :", error);
    } finally {
      setIsLoading(false);
      // Réinitialiser le formulaire
      setFirstName("");
      setLastName("");
      setThoughts("");
      setEmail("");
      setImage(null); // Réinitialiser l'image
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-xl">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <p className="text-center font-bold">Formulaire</p>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              VOTRE NOM
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="THOMAS"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              VOTRE PRÉNOM
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Xavier"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              VOS PENSÉES
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={thoughts}
              onChange={(e) => setThoughts(e.target.value)}
              placeholder="Vos pensées ici..."
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              VOTRE EMAIL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="xavier1990@gmail.com"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              TÉLÉCHARGER UNE IMAGE
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="file"
              accept="image/*" // Limiter le type de fichier à une image
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 w-full px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Chargement..." : "ENREGISTRER"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
