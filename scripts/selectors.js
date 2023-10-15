const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWU0YjlhZDI4YzhlYzBmM2U3Y2NlN2M1ZmM2YmE5NiIsInN1YiI6IjYxYTI1MzE5ZDEzMzI0MDA2MmE5NGJhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bCNR1x1_Rv5AXnrFMhXvpFpgB6U03YEMiQlQPFZNBeE'
    }
};



const sidebar = document.querySelector('.sidebar');
const btnCloseSdebar = document.querySelector('.btn-closeSidebar');
const btnShowSidebar = document.querySelector('.btn-showSidebar');


const MOVIES_CUALITY = [
    'HD',
    'UHD',
    '4K',
];


export {options, sidebar, btnCloseSdebar, btnShowSidebar, MOVIES_CUALITY};