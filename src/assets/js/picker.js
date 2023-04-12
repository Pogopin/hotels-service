export const dataIn = (selector, callback) => {

    const DateInput = new easepick.create({
        element: document.getElementById(selector),
        css: ['https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',],
        zIndex: 10,
        format: 'YYYY-MM-DD',
		
        setup(DateInput) {
            DateInput.on('select', (e) => {
                const date = DateInput.getDate().format('YYYY-MM-DD')
                callback(date);
            });
        }
    });
}
