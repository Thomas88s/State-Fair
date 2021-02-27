const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("rideTicketPurchased", customEvent => {
    const ticketSelect = document.querySelector(".buttonClick")
    ticketSelect.innerHTML = customEvent.detail.selectedTicket
    const rideEvent = new CustomEvent("rideTicketPurchased", {
        detail: {
            selectedTicket: changeEvent.target.value
        }
})


        eventHub.dispatchEvent(rideEvent)
})




export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        ${officersCollection.map(cop => {
            const officer = cop.name
            return `<option value="${officer}">${officer}</option>`
        })}
        </div>
    `
}

