const getList = async () => {
    const { data } = await axios.get('/recipe/list');
    console.log(data);

    const recipeleList = data.result.list;

    let html = '';
    for(const item of recipeleList){
        html = `${html}<button data-id="${item.id} type="button">${item.name}</div>`;
    }
    const boxEl = document.querySelector('.box');
    boxEl.innerHTML = html;
}

getList();

