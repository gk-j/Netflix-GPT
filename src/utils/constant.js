

export const LOGO = "https://cdn-icons-png.flaticon.com/512/2798/2798007.png"

export const USER_AVATAR= "https://occ-0-4829-1007.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABRPhDNbxfvPHVFP56kT7oI1DpyMjd14ix52RDF7o8qn9Zy8UboO5MeYaz1IeUEr1w7sih47wXzwyVWIxuNjXAcapQE4T-cU.png?r=7c7"

export const BG_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg"

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_TMBD_API_KEY}`
    }
  };

export const IMAGE_CDN_URL="https://image.tmdb.org/t/p/w500/"  

export const SUPPORTED_LANGUAGES = [
  {identifier:"en",name:"English"},
  {identifier:"hindi",name:"Hindi"},
  {identifier:"telugu",name:"Telugu"},
  {identifier:"spanish",name:"Spanish"}
]