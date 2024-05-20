export function removeFileExtensionFromUrl(url) {
    const parts = url.split("/");
  
    const fileNameWithExt = parts[parts.length - 1];
  
    const lastDotIndex = fileNameWithExt.lastIndexOf(".");
    if (lastDotIndex === -1) {
      return fileNameWithExt;
    } else {
      return fileNameWithExt.substring(0, lastDotIndex);
    }
  }