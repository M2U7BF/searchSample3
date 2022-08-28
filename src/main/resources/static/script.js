const userCardTemplate = document.querySelector("[data-user-template]") //template
const userDataListTemplate = document.querySelector("[data-list-elem-template]") //template

const userCardContainer = document.querySelector("[data-user-cards-container]") //大枠。この中で要素らが動く
const userDataList = document.querySelector("[search-data-list]")

const searchInput = document.querySelector("[data-search]") //検索欄

let users = []
let dataElements = []

searchInput.addEventListener("input", e => {
    console.log("クリック")
    const value = e.target.value.toLowerCase() //すべて一定の形式に変換

    //表示と非表示
    users.forEach(user => {
        const isVisible =
            user.name.toLowerCase().includes(value) ||
            user.number.includes(value)
        user.element.classList.toggle("hide", !isVisible)
    })

    dataElements.forEach(dataElement => {
        const isVisible =
            dataElement.name.toLowerCase().includes(value) ||
            dataElement.number.includes(value)
        dataElement.element.classList.toggle("disable", !isVisible)
    })
})

//fetch()で非同期通信により、外部リソースの取得
fetch("http://localhost:8080/json")
    .then(res => res.json())
    .then(data => {

        dataElements = data.map(dataElement => {
            const dataList = userDataListTemplate.content.cloneNode(true).children[0]

            //文字列をセット
            dataList.textContent = dataElement.number
            dataList.value = dataElement.name

            //html追加
            userDataList.append(dataList)

            return { id: dataElement.id, name: dataElement.name, number: dataElement.number.toString(), element: dataList }
        })

        //配列にデータを格納
        users = data.map(user => {
            const card = userCardTemplate.content.cloneNode(true).children[0] //.children は子要素をすべて返す

            //templateの部品
            const header = card.querySelector("[data-header]")
            const body = card.querySelector("[data-body]")

            //文字列をセット
            header.textContent = user.name
            body.textContent = user.number

            //html追加
            userCardContainer.append(card)

            return { id: user.id, name: user.name, number: user.number.toString(), element: card }
        })
    })