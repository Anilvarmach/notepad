import html2pdf from 'html2pdf.js';

export const printContent = (title, content) => {
    const printWindow = window.open('', '', 'width=1000,height=600');

    // Create a new HTML document for printing
    const printDocument = `
      <html>
        <head>
          <title>${title}</title>
        </head>
        <body>
          ${content}
        </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(printDocument);
    printWindow.document.close();

    printWindow.print();
    printWindow.close();
};

export const downloadContent = (title, content) => {
    // Create a new HTML document for downloading
    const downloadDocument = `
      <html>
        <head>
          <title>${title}</title>
        </head>
        <body>
          ${content}
        </body>
      </html>
    `;

    const opt = {
        margin: 1,
        filename: title,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
    };

    // Convert the HTML content to a PDF and provide a download link
    html2pdf().set(opt).from(downloadDocument).toPdf().save();
};
