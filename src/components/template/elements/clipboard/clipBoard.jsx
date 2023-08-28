export const PasteContent = async (element) => {
    const newText = await navigator.clipboard.readText()
    const elem = document.querySelector("." + element)
    if (elem.outerText?.startsWith("Here goes")) {
        elem.innerHTML = newText
    } else {
        elem.innerHTML = elem.outerText + " " + newText
    }
}

export const CopyContent = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(e.target.outerText)
    return
}

export const preventCtxMenu = (e) => {
    e.preventDefault()
    alert("Context Menu is not allowed! Please paste your content using the second button that's showing when hover the element!")
}