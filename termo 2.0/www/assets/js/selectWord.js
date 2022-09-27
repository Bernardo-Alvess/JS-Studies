async function getGameWord(){
    const response = await fetch("/word", {})
    const json = await response.json()
    return json
}

