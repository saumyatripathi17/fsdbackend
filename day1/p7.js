const fs=require('fs');
const eraseFile = () => {
    fs.unlink('./data.txt', (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("File deleted successfully");
    }
  });
  };
  eraseFile();