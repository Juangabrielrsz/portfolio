function Pdf() {
  const handleDownload = () => {
    const pdfPath = './src/files/Curriculo.pdf';
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = "curriculo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className="btn">Download Curriculo</button>
  );
}

export default Pdf;
