const singleContainer = document.querySelector(".singleContainer")
const id = window.location.search?window.location.search.split("=")[1].split("&&")[0]:null;
const search = !id?null:window.location.search.split("&&")[1].split("%")[0].split("=")[1]+window.location.search.split("&&")[1].split("%")[1].split("0")[1];
console.log(search)
let innerHtmlSingle = "";
let i =0;
const wokerOfSingle = async () => {
    try {
        let datas = await fetch(`/single/search?id=${id}&&q=${search}`)
        
        const data = await datas.json()
        console.log(data)
        !data.data?innerHtmlSingle="<h1>:) OPP'S PAGE IS NOT FOUND (:</h1>":data.data.forEach((e)=> {
            let content = ` <div class="singleHeading">${e.proName || e.serviceName}</div>
            <div class="single">
                <div class="singleIntro">
                    <div class="img">
                        <img src="img/game_lobi.jpg" alt="">
                    </div>
                    <div class="discription">${"ipsum dolor sit, amet consectetur adipisicing elit. Aliquid culpa eaque suscipit excepturi eum animi similique. Ipsum dolore voluptatum sapiente." || e.serviceDiscription}</div>
                </div>
                <div class="singleOverview">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iusto dolorum eligendi animi molestiae consequuntur rem amet rerum, sit ad fugit dignissimos reiciendis officiis cum sint error, officia et ipsum magnam possimus dolores nihil omnis! Deleniti commodi dolorem natus dicta? Sequi laudantium deleniti aspernatur eveniet ullam beatae non, dignissimos corporis.</p>
                </div>
                ${e.serviceName ? "" : `
                <div class="link_single">
                   <a class="ger_btn" href="/download?filename=${search}" class="downloadBtn">Download</a>
                   <a class="ger_btn" href="" class="shareBtn">Share</a>
                </div>`}
            </div>`
            innerHtmlSingle += content;
        })
        singleContainer.innerHTML = innerHtmlSingle
    } catch (error) {
        console.log(error)
    }
}
wokerOfSingle();