let $$$$ = document.createElement('iframe')
$$$$.id = 'docs'
$$$$.src = `./main/main.html`
$$$$.frameBorder = 0;
document.getElementsByTagName('body')[0]
.appendChild($$$$)



document.getElementById('docs').frameBorder =0 ;
document.getElementById('docs').src = './main/main.html'

  let $$ = document.getElementById('spc')
  .getElementsByTagName('section')[0].innerHTML;
  
  document.getElementById('appbar')
  .getElementsByTagName('details')[0]
  .getElementsByTagName('div')[0].innerHTML = $$;
  

    //spc엘리먼트에 있는 애들 다 앱바에도 복사해주는 코드임ㅎ
  function onClick (e) {
    //console.log(e)
    e.preventDefault();
    const dirName = e.target.parentElement.getElementsByTagName('summary')[0].innerText
    const parentDirName = e.target.parentElement.parentElement.getElementsByTagName('summary')[0].innerText

    const docsName = e.target.innerHTML;
    //console.log(docsName, 'docsName')
    if ( document.getElementById('docs') ) document.getElementById('docs').remove();
    const newElem = document.createElement('iframe')
    newElem.id = 'docs'
    newElem.src = `./docs/${parentDirName}/${dirName}/${docsName}.html`
    newElem.frameBorder = 0;
    document.getElementsByTagName('body')[0]
    .appendChild(newElem)

    // document.getElementById('folding').click();
  }

  const linkList = document.getElementsByClassName('docsLink')
  for (item of linkList){
    item.addEventListener('click', onClick)
  }

  // let tempContents = ''
  // document.getElementById('hide').onclick = (e) => {
  //   e.preventDefault();

    
  //   if (document.getElementsByTagName('section')[0]){
  //     let sect = document.getElementsByTagName('section')[0]
  //     //console.log(sect.innerHTML)
  //     tempContents = sect.innerHTML;
  //     console.log(tempContents)
  //     sect.remove();
  //     document.getElementById('docs').style.width = '100vmax'
  //     //1px #8064a9 solid
  //     document.getElementById('docs').style.borderLeft = 'none'
      
  //   }
  //   else {
  //     console.log('d')
  //     let newSect = document.createElement('section');
  //     console.log(newSect, tempContents)
  //     newSect.innerHTML = tempContents;
  //     document.getElementById('spc').appendChild(newSect);
  //     document.getElementById('docs').style.width = '80vmax'
  //     document.getElementById('docs').style.borderLeft = '1px #8064a9 solid'
  //   }
  // }


  // let apps = document.getElementsByClassName('appsLink');
  // for (link of apps){
  //   link.addEventListener('click', e => {
  //     e.preventDefault();
  //     let p_ = e.target.id;
  //     if ( document.getElementById('docs') ) document.getElementById('docs').remove();
  //     const newElem = document.createElement('iframe')
  //     newElem.id = 'docs'
  //     newElem.src = `http://49.164.19.151:${p_}`
  //     newElem.frameBorder = 0;
  //     const bod_ = document.getElementsByTagName('body')[0]
  //     //console.log(bod_)
  //     bod_.appendChild(newElem)
  //   })

  // }
