const url = "https://api.github.com/repos/AstroBinge/shinsou/releases/latest";
// Fetch latest release information from GitHub API
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // Get the first asset of the release
    const asset = data.assets[0];
    const downloadLink = document.getElementById("download-link");

    // Set the download link URL and text
    downloadLink.href = asset.browser_download_url;
  })
  .catch((error) => {
    console.error(error);
  });
