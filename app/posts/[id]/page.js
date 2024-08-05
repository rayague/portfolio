"use client";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig"; // Assurez-vous que le chemin est correct
import { useParams, useRouter } from "next/navigation"; // Importer useParams

export default function Page() {
  const { id } = useParams(); // Récupérer l'ID du post à partir des paramètres de l'URL
  const router = useRouter();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        const postRef = doc(db, "formResponses", id);
        const postSnap = await getDoc(postRef);
        if (postSnap.exists()) {
          setPost({ id: postSnap.id, ...postSnap.data() });
        } else {
          console.log("Aucun document trouvé !");
        }
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Chargement...</div>; // Afficher un message de chargement pendant que les données sont récupérées
  }

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">
        {post.formFirstName} {post.formLastName}
      </h1>
      <h2 className="text-xl mb-2">
        Posted on: {new Date(post.postDate).toLocaleDateString()}
      </h2>
      <p className="mb-4">{post.formThoughts}</p>
      {/* Afficher d'autres détails ici si nécessaire */}
      <button
        onClick={() => router.back()}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Retour
      </button>
    </div>
  );
}
