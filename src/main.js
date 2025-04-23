import { generarQR } from './api/generarQR.js';

document.getElementById('formulario').addEventListener('submit', async (e) => {
  e.preventDefault(); // Evita el comportamiento predeterminado del formulario

  // Obtiene el formulario y el archivo seleccionado
  const form = e.target;
  const formData = new FormData(form);

  // Muestra un mensaje o un loader mientras se procesa
  const downloadSection = document.getElementById('download-section');
  const downloadLink = document.getElementById('download-link');
  downloadSection.classList.add('hidden'); // Esconde el botón de descarga mientras no haya archivo listo

  try {
    // Llama a la función generarQR desde el archivo generarQR.js
    const downloadUrl = await generarQR(formData);

    // Establece el enlace para descargar el archivo generado
    downloadLink.href = downloadUrl;
    downloadLink.download = 'personal_hotel_con_QRs.xlsx'; // Nombre del archivo a descargar

    // Muestra el botón de descarga
    downloadSection.classList.remove('hidden');
  } catch (error) {
    alert('Hubo un error al generar el archivo.');
  }
});
