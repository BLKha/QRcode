const qrText =document.getElementById('qrText');
const imgBox =document.getElementById('imgBox');
const qrImg =document.getElementById('qrImg');
const createQR =document.getElementById('createQR');
const noti=document.querySelector('.noti');

function generateQR(){
    if(qrText.value.length != ''){
     qrImg.src ='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText.value;
    imgBox.classList.add('show-img')  
    noti.style.display='none'
    }else{
        qrText.classList.add('error'); 
        setTimeout(()=>{
        qrText.classList.remove('error');   
        },1000)
        noti.style.display= 'block';
    }
}
function clickBtn(){
    createQR.addEventListener('click',generateQR)
}

    qrText.addEventListener('input',()=>{
        if(qrText.value === ''){
            imgBox.classList.remove('show-img')
        }else{
            noti.style.display='none'
        }
    })
    qrText.addEventListener('keydown',(event)=>{
        if(event.key ==='Enter'){
        generateQR();
        }
    })
clickBtn(); 
  