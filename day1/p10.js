const fs=require('fs');
const eraseFile = () => {
    fs.rmdir('mkdir', (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("directory deleted successfully");
    }
  });
  };
  eraseFile();