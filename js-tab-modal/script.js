
//TABS
class tab {
    constructor (tabId) {
        this.tab = document.getElementById(tabId);
        this.tittles = this.tab.children[0].children;
        this.contents = this.tab.children[1].children;
        for (let i = 0; i < this.tittles.length; i++) {
            this.tittles[i].onclick = ()=>{
                for (let j = 0; j < this.contents.length; j++) {
                    this.tittles[j].classList.remove('active');
                    this.contents[j].classList.remove('show');
                }
                this.tittles[i].classList.add('active')
                this.contents[i].classList.add('show');
            } 
            
        } 

    }
}

var tab1 = new tab('tab1');
var tab1 = new tab('tab2');

//MODAL
class modal {
    constructor (modalId, e){
        this.modal = document.getElementById(modalId);
        this.xIcon = this.modal.children[0].children[0];
        this.link = this.modal.children[0].children[1];
        this.modal.addEventListener(e,()=>{
            this.modal.classList.remove('hide')
        })
        this.xIcon.addEventListener('click',()=>{
            this.modal.classList.add('hide')
        })
        this.link.addEventListener('click',()=>{
            this.modal.classList.add('hide')
        })
        this.modal.addEventListener('click',()=>{
            this.modal.classList.add('hide')
        })
    }
}

var modal1 = new modal('modal1');

var modal2 = new modal('modal2');
modal2.link.style.backgroundImage = 'url(https://picsum.photos/id/238/600/300)'

var showModal1 = function(){
    modal1.modal.classList.remove('hide');
}

var showModal2 = function(){
    modal2.modal.classList.remove('hide');
}

//Chạy modal1 khi window load xong
window.addEventListener('load',()=>{
    document.getElementById('loading').classList.add('hide');
    console.log("finished");
    showModal1();
});

