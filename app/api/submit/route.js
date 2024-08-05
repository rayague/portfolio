export async function POST(request) {
  const formData = await request.formData();
  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const thoughts = formData.get("thoughts");
  const file = formData.get("file");

  // Traitement des données (par exemple, stockage dans une base de données)
  console.log({ firstname, lastname, thoughts, file });

  return new Response(
    JSON.stringify({ message: "Données reçues avec succès!" }),
    { status: 200 }
  );
}
