const text = [
    "Preparing packages",
    "Reading your files",
    "Password files detection",
    "Sending all passwords and personal files to server",
    "Cleaning up",
    "Data Access Completed"]

function randomDelay() {
    return new Promise((resolve) => {
        let timeout = Math.random() * (7000 - 2000) + 2000
        setTimeout(() => {
            resolve()
        }, timeout)
    })
}

async function addText(ele) {
    await randomDelay();
    let div = document.createElement('div')
    div.innerHTML = ele;
    document.body.append(div)
}

async function main() {
    let t = setInterval(() => {
        let last = document.querySelectorAll('div')
        last = last[last.length - 1]

        if (last.innerHTML.endsWith('...')) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
        }
        else {
            last.innerHTML = last.innerHTML + '.'
        }
    }, 700)

    for (const ele of text) {
        await addText(ele);
    }
    clearInterval(t)
}

main()