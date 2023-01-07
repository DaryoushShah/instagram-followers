const fs = require('fs');

const InstagramFollowers = (() => {
  /* Default filepaths */
  const followersFilePath = './files/followers.json';
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
    /* Load followers JSON */
    const followersJSON = _loadJSON(followersFilePath);
    if(followersJSON === null){
      console.log('ERROR: JSON file not found');
      return null;
    }

    /* Get the relationships_and_followers array */
    const relationships_followers = followersJSON['relationships_followers'];
    
    const followers = [];
    /* Loop through the array and push values to followers */
    for(let i = 0; i < relationships_followers.length; i++){
      followers.push(relationships_followers[i]['string_list_data'][0]['value']);
    }
    return followers;
  }

  const _getFollowing = () => {
      /* Load followers JSON */
      const followersJSON = _loadJSON(followingFilePath);
      if(followersJSON === null){
        console.log('ERROR: JSON file not found');
        return null;
      }
  
      /* Get the relationships_and_followers array */
      const relationships_following = followersJSON['relationships_following'];
      
      const following = [];
      /* Loop through the array and push values to followers */
      for(let i = 0; i < relationships_following.length; i++){
        following.push(relationships_following[i]['string_list_data'][0]['value']);
      }
      return following; 
  }

  const viewNotFollowingBack = () => {

  }

  return {
    viewNotFollowingBack
  }
})();

InstagramFollowers.viewNotFollowingBack();
