const API = 'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=10';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '1a71bebc9cmshd3fbc21ba7e3a21p17ba54jsn5fdab418a2f1',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlAPI) {
    try {
        const response = await fetch(urlAPI, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
            ${videos.items.slice(0, 4).map(video => `
                <div class="group relative">
                    <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            ${video.snippet.title}
                        </h3>
                    </div>
                </div>
            `).join('')}
        `;

        content.innerHTML = view;
    } catch (error) {
        console.error("Error en la ejecución de la función:", error); 
    }
})();
