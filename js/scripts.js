const contact = () => {
    const email = window.document.querySelector("#email").value
    const newsletterResponse = window.document.querySelector("#newsletter-response")

    axios.get(`https://almeida-api.onrender.com/subscribe/${email}`).then(response => {
        newsletterResponse.innerText = response.data.message
    })
}