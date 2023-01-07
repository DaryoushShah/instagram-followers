const fs = require('fs');

const InstagramFollowers = (() => {
  /* Default filepaths */
  const followersFilePath = './files/followers1.json';
  const followingFilePath = './files/following.json';
  
  const _loadJSON = (filepath) => {
    /* Check to ensure file is of type .json */
    if(filepath.slice(filepath.length - 5) !== '.json'){
      console.log('ERROR: Attempting to load JSON object from file not ending in \'.json\'');
      return null;
    }
    /* Return object for opened JSON file */
    return JSON.parse(fs.readFileSync(filepath));
  }

  const _getFollowers = () => {
    const followersJSON = _loadJSON(followersFilePath);
    if(followersJSON === null){
      console.log('ERROR: JSON file not found');
      return null;
    }
    return followersJSON;
  }

  return {
    _getFollowers
  }
})();
