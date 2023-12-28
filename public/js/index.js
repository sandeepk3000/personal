
const projects = document.querySelector(".projects");
const advantages = document.querySelector(".advantages");
const services = document.querySelector(".services")
const banner_container = document.querySelector(".banner_container")
const project_container =document.querySelector(".project_container")
const body = document.querySelector(".body")
let innerHProject = "";
let innerHAdvantages = "";
let innerHService = ""
const workerOfHome = async () => {
    try {
        let datas = await fetch(`/homeData`)
        let data = await datas.json();
        console.log(data)
        data.proData.forEach((e,i) => {
            let projectContent = ` <a href="/singleProject?id=${e._id}&&search=${e.proName}">
            <div class="project_card">
                <h2>${e.proName}</h2>
                <div class="project_img">
                    <img src="img/game_lobi.jpg" alt="" class="img">
                </div>
                <div class="project_read_more ger_btn">
                    Read More
                </div>
            </div>
        </a>`
            let advantagesContent = `<div class="field_container">
        <h2>Express Js<span val="go">${e.useRating}</span></h2>
        <div class="field">
            <img src="img/game_lobi.jpg" alt="" class="field_icon">
            <div class="rating_container" style="width:70%; background-color: #c6baba;">
                <div class="field_use_rating" style="width:${e.useRating};"></div>
            </div>
        </div>
    </div>`
            innerHProject += projectContent;
            innerHAdvantages += advantagesContent;
        })
        advantages.innerHTML = innerHAdvantages
        projects.innerHTML = innerHProject;


        data.serData.forEach(e => {
            let serviceContent = `<a href="/singleService?id=${e._id}&&search=service">
    <div class="service_card">
        <h2>${e.serviceName}</h2>
        <img src="img/game_lobi.jpg" alt="">
        <p>ipsum dolor sit amet consectetur adipisicing elit. Quis corrupti veritatis vitae? Alias
            ea delectus consequuntur? Quisquam quidem ad quibusdam placeat fugiat, sapiente quaerat
            minima, excepturi fugit sint sequi. Rerum?</p>
        <div class="explore_service_btn ger_btn">
            Explore
        </div>
    </div>
    </a>`
            innerHService += serviceContent
        })
        services.innerHTML = innerHService

    } catch (error) {
        console.log(error)
    }

}
workerOfHome()
const options = {
    root:null,
    // rootMargin:"0px",
    threshold:.2
}
const callback = (entries,observer)=>{
    console.log(entries)
    entries[0].isIntersecting==false?body.classList.add("sticky"):body.classList.remove("sticky")
}
const observer = new IntersectionObserver(callback,options)
observer.observe(banner_container)