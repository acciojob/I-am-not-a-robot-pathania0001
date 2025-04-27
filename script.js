//your code here
let images = ["https://picsum.photos/id/237/200/300",
			 "https://picsum.photos/seed/picsum/200/300",
			 "https://picsum.photos/200/300?grayscale",
			 "https://picsum.photos/200/300",
			 "https://picsum.photos/200/300/"];


let imgContainer = document.getElementsByClassName("img-container");
let result  = document.getElementById("para");
let resetButton  = document.getElementById("reset");
let verifyButton  = document.getElementById("verify");
let selectedImgs = [];
function setUp(){
 let randomNumber = Math.floor(Math.random() * images.length);
  let iterimages = [...images,images[randomNumber]];

	
  iterimages.map((url)=>{
   let img = document.createElement("img");
    img.src = url;
	  imgContainer[0].appendChild(img);
	 img.addEventListener("click", () =>{ 
		 selectedImgs.push(url);
		 if(selectedImgs.length)
	     resetButton.style.display = "block";
		 if(selectedImgs.length == 2)
		  verifyButton.style.display = "block";
	 });
   })
}

function check(){
    if(selectedImgs[0] === selectedImgs[1]){
		result.textContent = "You are a human. Congratulations!";
	}
   else {
	   result.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
   }
}
resetButton.addEventListener("click", () => {
    selectedImgs = [];
    result.textContent = "";
    imgContainer[0].innerHTML = "";
	resetButton.style.display = "none";
	verifyButton.style.display = "none";
    setUp();  
});

 verifyButton.addEventListener("click" , () => check())
setUp()
	  


