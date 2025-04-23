// src/api/generarQR.js
export async function generarQR(formData) {
    try {
      // Realiza la solicitud POST al servidor Express para generar los códigos QR
      const response = await fetch('/api/generarQR', {
        method: 'POST',
        body: formData,
      });
  
      // Verifica si la respuesta es exitosa
      if (!response.ok) {
        throw new Error('Error al generar los QR');
      }
  
      // Si la respuesta es exitosa, obtén el archivo generado como Blob
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
  
      // Devuelve la URL del archivo para que el cliente pueda descargarlo
      return url;
    } catch (error) {
      console.error('Error al enviar el archivo:', error);
      throw error;
    }
  }
  