const showOptions = function () {
    if (rewardList.length > 0) {
        ulRewards.textContent = 'Rewards:';
        for (let i = 0; i < rewardList.length; i++) {
            // console.log(rewardList[i]);
            addElemToList(ulRewards, rewardList, 'removeReward');
        }
    }
    if (punishmentList.length > 0) {
        ulPunishments.textContent = 'Punishments:';
        for (let i = 0; i < punishmentList.length; i++) {
            // console.log(punishmentList[i]);
            addElemToList(ulPunishments, punishmentList, 'removePunishment');
        }
    }
    removeButtons();
}

function addElemToList(ulElementList, list, listName) {
    const li = document.createElement('li');
    const x = document.createElement('span');
    x.innerHTML = ' X';
    x.classList = listName
    ulElementList.appendChild(li);
    li.textContent = list[i];
    li.appendChild(x);
}

const generateReward = () => {
    czescwspolna(rewardList, 'Reward Generated')
}
const generatePunishment = () => {
    czescwspolna(punishmentList, 'Punishment Generated')
}


function czescwspolna(lista, komunikat) {
    if (lista.length > 0) {
        console.log(komunikat)
        const index = Math.floor(Math.random() * lista.length);
        h1.textContent = '';
        setTimeout(() => {
            h1.textContent = lista[index];
        }, 400);
    }
}