const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const startBtn = document
    .getElementById("startBtn")
    .setAttribute("onclick", `js:begin()`);
    const endPoint = 12;
    const select = [];
// const timer = document.getElementById('timer')
// const time = document.createElement('label')
// time.style.position ="fixed"
// time.style.right="80px"
// time.style.zIndex="999"
// time.style.top="18px"
// time.style.color=" white"
// time.style.fontSize="1.3rem"
// let i = 00
// setInterval(()=>{
// if(window.scrollY> 20){
//     if(i >=61){
//         return i =  0;
//     }
//     timer.style.display="fixed"
//     time.style.display="fixed"
//     timer.appendChild(time)
//     time.innerText=`00:${i}`
//     i++
 
  
// }else{
//     timer.style.display="none"
//     time.style.display="none"
// }
// },10)



    const teamIntro= () =>{
        const myteam = document.getElementById('footerTeam');
   
        myteam.innerText="with 현,명,혁,호"
        myteam.style.fontSize="0.6rem"
    }
    const help =() =>{
        const footerHelp = document.getElementById('footerHelp')
        footerHelp.innerHTML =  `<div><i class="fa-solid fa-envelope-open"></i> rladlsvy2448@naver.com</div>`;
        footerHelp.style.fontSize="0.6rem"
    }


    function calResult() {
        const pointArray = [
            { name: "탑", value: 0, key: 0 },
            { name: "미드", value: 0, key: 1 },
            { name: "정글", value: 0, key: 2 },
            { name: "서폿", value: 0, key: 3 },
            { name: "원딜", value: 0, key: 4 },
        ];
        for (let i = 0; i < endPoint; i++) {
            const target = qnaList[i].a[select[i]];
            for (let j = 0; j < target.position.length; j++) {
                for (let k = 0; k < pointArray.length; k++) {
                    if (target.position[j] === pointArray[k].name) {
                        pointArray[k].value += 1;
                    }
                }
            }
        }
        // console.log(pointArray);
        const resultArray = pointArray.sort((a, b) => b.value - a.value);
        // console.log(resultArray);
        let resultword = resultArray[0].key;
        // console.log(resultword);
        return resultArray;
    }
    function setLoading(){
        result.innerHTML="<div>로딩중</div>"
        setTimeout(()=>{
            result.innerHTML= ""
        },1000)
   
        return 
    }
    function setResult() {
        let point = calResult();
        // console.log(point)
        // 전체 value 값
        let j = 0
        for(let i in point){
     
            j += point[i].value
            // console.log(i)
        }
        // console.log(j)
        setTimeout(()=>{
         
        const resultName = document.querySelector(".resultName");
        resultName.innerHTML = infoList[point[0].key].name.replace(/[<>]/gi,"") + `(${Math.floor((point[0].value * 100)/j)})%`;
        const resultDesc = document.querySelector(".resultDesc");
        resultDesc.innerHTML = infoList[point[0].key].desc;
        },0)
        const resultRank = document.querySelector('.resultRank')
        resultRank.innerHTML = `
        <div>2등: ${infoList[point[1].key].name}   ${Math.floor((point[1].value * 100)/j)}%</div>
         <div>3등: ${infoList[point[2].key].name}  ${Math.floor((point[2].value * 100)/j)}%</div>
         <div>4등: ${infoList[point[3].key].name}  ${Math.floor((point[3].value * 100)/j)}%</div>
         <div>5등: ${infoList[point[4].key].name}  ${Math.floor((point[4].value * 100)/j)}%</div>
         `
    
  

        for(let i = 0; i < 5 ; i++){
            const resultImg = document.createElement("img");
            const imgDiv = document.querySelector("#resultImg");
            const imgUrl = "./img/image-" + point[0].key + i +".png";
            resultImg.src = imgUrl;
            resultImg.alt = point[i];
            resultImg.classList.add("img-fluid");
            imgDiv.appendChild(resultImg);
        }
      
       
    }
    function goResult(){
        qna.style.WebkitAnimation = "fadeOut 1s  ";
        qna.style.animation = "fadeOut 1s";
        setTimeout(() => {
            result.style.WebkitAnimation = "fadeIn 1s";
            result.style.animation = "fadeIn 1s";
            setTimeout(() => {
                qna.style.display = "none";
                result.style.display = "block";
            }, 450);
            calResult();
            setResult();
          
            // console.log(select);
        }, 450);
    }
    function addAnswer(answerText, qIdx, idx) {
        const answerBox = document.querySelector(".answerBox");
    const answer = document.createElement("div");
    const img = document.createElement('img')
    answer.classList.add("answerList");
    answer.classList.add("fadeIn");
    answerBox.appendChild(answer);
    setTimeout(()=>{
        answer.appendChild(img)
        // img.src = "https://opgg-static.akamaized.net/images/lol/champion/Diana.png?image=c_crop,h_103,w_103,x_9,y_9/q_auto,f_webp,w_64&v=1658762585003"
        // img.style.width ="40px"
        // img.style.height="40px"
        // img.style.borderRadius= " 50%"
    },0)
    answer.innerHTML = answerText 
    answer.addEventListener(
        "click",
         function() {
            const children = document.querySelectorAll(".answerList");
            for (let i = 0; i < children.length; i++) {
                children[i].disabled = true;
                children[i].style.WebkitAnimation = "fadeOut 1s";
                children[i].style.animation = "fadeOut 1s";
            }
            setTimeout(() => {
                select[qIdx] = idx;
                // console.log(select)
                for (let i = 0; i < children.length; i++) {
                    children[i].style.display = "none";
                }
                goNext(++qIdx);
            }, 100);
        },
        false
    );
    }
    const goNext = (qIdx)=>{
        if (qIdx === endPoint) {
            goResult();
            return;
        }
        const q = document.querySelector('.qBox');
        q.innerHTML = qnaList[qIdx].q 
        for(let i in qnaList[qIdx].a){
            addAnswer(qnaList[qIdx].a[i].answer, qIdx, i)
        }
        setTimeout(()=>{
            const status = document.querySelector(".status");
            const statusImg = document.createElement('img')
            statusImg.style.width = (100 / endPoint)  +'%';
            statusImg.style.animation="rotate 5s infinite"
            statusImg.style.animationTimingFunction =" linear"
            statusImg.src = "../img/시비르표창.png"
            status.appendChild(statusImg)
        },0)
      

    }

    function begin(){
 
        main.style.WebkitAnimation = "fadeOut 1s  ";
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";
        setTimeout(() => {
            main.style.display = "none";
            qna.style.display = "block";
        }, 450);
        let qIdx = 0;
        goNext(qIdx)
        
    }, 450);
    }