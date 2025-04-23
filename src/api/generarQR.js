const API_URL = import.meta.env.VITE_API_URL;

const enviarArchivo = async (archivo) => {
  const formData = new FormData();
  formData.append('archivo', archivo);

  const res = await fetch(`${API_URL}/api/generarQR`, {
    method: 'POST',
    body: formData
  });

  if (!res.ok) throw new Error('Error al generar QR');

  const blob = await res.blob();
  const url = window.URL.createObjectURL(blob);
  window.open(url);
};
