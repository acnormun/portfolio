async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/acnormun/anaddpmg/main/Portifolio/assets/js/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}