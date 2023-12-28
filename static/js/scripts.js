const colors = ["#55cfff", "#f27f81", "#ffd482"];
const phrase_api = 'https://script.googleusercontent.com/macros/echo?user_content_key=yyj5f69tbK-K2pL2hD1c8W8OYiMNrMDadK_dAW3bSyapbmx0lAeNyTICavHw9LO2TKQ5fXP5g3TYN8fZSX-oCqAtb_z329zQm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNeD3ww9REWhaa0RW5JCFks9XmqqhUXfeJay-P85dnlrtaeyorSlKpPqLfEvp0HSF2i7S9MzESQ0WeJOO3_YgSzTlM1DGEspCNz9Jw9Md8uu&lib=MxjYd8MaB0xVF4ATIbrgijE49s_fr6bTd';
let text = '';
let index = 0;

function getPhrase() {
  return fetch(phrase_api)
    .then(response => response.json())
    .then(data => {
      text = data.phrase;
      setTypeWriterRandomColor();
      typeWriter();
    })
    .catch(error => {
      console.error('Ошибка получения фразы:', error);
    });
}

function typeWriter() {
  document.getElementById('text-typing').textContent += text[index];
  index++;
  if (index < text.length) {
    setTimeout(typeWriter, 50);
  } else {
    document.getElementById('text-typing').style.borderRight = 'none';
  }
}

function setTypeWriterRandomColor() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById('text-typing').style.borderRight = `.15em solid ${randomColor}`;
}

getPhrase();
