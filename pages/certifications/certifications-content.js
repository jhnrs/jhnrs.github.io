fetch("certFiles.json")
  .then(res => res.json())
  .then(files => {
    const seminarContainer = document.querySelector(".seminars-container");
    seminarContainer.innerHTML = ""; // Clear old/test content

    files.forEach(file => {
      // Wrapper div for each certificate
      const pdfViewer = document.createElement("div");
      pdfViewer.classList.add("pdf-viewer");

      // Create iframe to display the PDF
      const embed = document.createElement("embed");
      embed.src = file;
      embed.width = "100%";
      embed.height = "400";
      //embed.className = "embedEdits"

      // Add iframe into wrapper
      pdfViewer.appendChild(embed);

      // Add to the container
      container.appendChild(pdfViewer);
    });
  })
  .catch(err => console.error("Error loading certificate files:", err));
