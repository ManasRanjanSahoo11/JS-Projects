const url = './cv.pdf';

let pdfDoc = null,
    pageNum = 1,
    pageIsRendering = false,
    pageNumIsPending = null;

const scale = 1.5,
    canvas = document.querySelector('#pdf-render'),
    ctx = canvas.getContext('2d');

//Render the page
const renderPage = num => {
    pageIsRendering = true;
  
    // Get page
    pdfDoc.getPage(num).then(page => {
      // Set scale
      const viewport = page.getViewport({ scale });
      canvas.height = viewport.height;
      canvas.width = viewport.width;
  
      const renderCtx = {
        canvasContext: ctx,
        viewport
      };
  
      page.render(renderCtx)      //<--Imp
      .promise.then(() => {
        pageIsRendering = false;
  
        if (pageNumIsPending !== null) {
          renderPage(pageNumIsPending);
          pageNumIsPending = null;
        }
      });
  
      // Output current page
      document.querySelector('.page-num').textContent = num;
    });
  };

  //check for page rendering
  const queueRanderPage = num =>{
    if(pageIsRendering){
        pageNumIsPending = num;
    } else{
        renderPage(num)
    }
  }

//show previous page
const showPrevPage = ()=>{
    if(pageNum <= 1){
        return;
    }
    pageNum--;
    renderPage(pageNum)
    queueRanderPage(pageNum)
}

//show previous page
const showNextPage = ()=>{
    if(pageNum >= pdfDoc.pageNum){
        return;
    }
    pageNum++;
    renderPage(pageNum)
    queueRanderPage(pageNum)
}

//Get Document
pdfjsLib.getDocument(url).promise.then(pdfDoc_ =>{
    pdfDoc = pdfDoc_;
    // console.log(pdfDoc);

    document.querySelector('.page-count').textContent = pdfDoc.numPages;

    renderPage(pageNum);
})

//Button Events
document.querySelector('#prev-page').addEventListener('click', showPrevPage)
document.querySelector('#next-page').addEventListener('click', showNextPage)